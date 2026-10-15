import {AfterViewInit, Component, DestroyRef, ElementRef, inject, Input, ViewChild, ChangeDetectionStrategy} from '@angular/core';

const FRAME_COUNT = 6;
const FRAME_SIZE = 200;
const FRAME_INTERVAL_MS = 125; // 8 fps

// Generated once and shared by every noise instance; cycling cached data URLs is far cheaper
// than drawing and PNG-encoding a fresh frame on every tick.
let frames: string[] | null = null;

function getFrames(): string[] {
    if (frames) return frames;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return frames = [];

    canvas.width = FRAME_SIZE;
    canvas.height = FRAME_SIZE;

    frames = Array.from({length: FRAME_COUNT}, () => {
        const img = ctx.createImageData(FRAME_SIZE, FRAME_SIZE);
        const data = img.data;

        for (let i = 0; i < data.length; i += 4) {
            // pick 0 = red, 1 = green, 2 = blue
            const channel = Math.floor(Math.random() * 3);

            data[i] = channel === 0 ? 255 : 0;
            data[i + 1] = channel === 1 ? 255 : 0;
            data[i + 2] = channel === 2 ? 255 : 0;
            data[i + 3] = 255; // opaque
        }

        ctx.putImageData(img, 0, 0);
        return canvas.toDataURL();
    });
    return frames;
}

@Component({
    selector: 'app-noise',
    imports: [],
    templateUrl: './noise.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './noise.component.scss'
})
export class NoiseComponent implements AfterViewInit {
    @ViewChild('noise', {static: true}) noiseEl!: ElementRef<HTMLDivElement>;
    @Input() zIndex: number = 199;
    @Input() opacity: number = 0.4;
    @Input() fullscreen = true;

    private readonly destroyRef = inject(DestroyRef);
    private timer: ReturnType<typeof setInterval> | null = null;
    private frameIndex = 0;

    ngAfterViewInit(): void {
        const urls = getFrames();
        if (!urls.length) return;

        const el = this.noiseEl.nativeElement;
        const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

        const showFrame = () => {
            el.style.backgroundImage = `url(${urls[this.frameIndex]})`;
        };

        const stop = () => {
            if (this.timer !== null) clearInterval(this.timer);
            this.timer = null;
        };

        // Animate only while the tab is visible and the user hasn't asked for reduced motion;
        // otherwise leave a static frame on screen.
        const update = () => {
            if (document.hidden || reducedMotion.matches) {
                stop();
                return;
            }
            if (this.timer !== null) return;
            this.timer = setInterval(() => {
                this.frameIndex = (this.frameIndex + 1) % urls.length;
                showFrame();
            }, FRAME_INTERVAL_MS);
        };

        showFrame();
        update();

        document.addEventListener('visibilitychange', update);
        reducedMotion.addEventListener('change', update);

        this.destroyRef.onDestroy(() => {
            stop();
            document.removeEventListener('visibilitychange', update);
            reducedMotion.removeEventListener('change', update);
        });
    }
}
