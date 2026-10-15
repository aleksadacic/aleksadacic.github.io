import {AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, Input, ViewChild} from '@angular/core';

// Live film grain: a small tile of random RGB pixels is regenerated every frame and painted
// across the canvas as a repeating pattern. The canvas renders at a reduced resolution and is
// stretched with pixelated scaling, so each grain is `grainSize` screen pixels wide.
@Component({
    selector: 'app-noise',
    imports: [],
    templateUrl: './noise.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './noise.component.scss'
})
export class NoiseComponent implements AfterViewInit {
    @ViewChild('noise', {static: true}) noiseEl!: ElementRef<HTMLCanvasElement>;
    @Input() zIndex: number = 199;
    @Input() opacity: number = 0.4;
    @Input() fullscreen = true;
    @Input() patternSize = 250;
    @Input() fps = 24;
    @Input() grainSize = 2; // in device pixels

    private readonly destroyRef = inject(DestroyRef);

    ngAfterViewInit(): void {
        const canvas = this.noiseEl.nativeElement;
        const ctx = canvas.getContext('2d');
        const tile = document.createElement('canvas');
        const tileCtx = tile.getContext('2d');
        if (!ctx || !tileCtx) return;

        tile.width = tile.height = this.patternSize;
        const tileData = tileCtx.createImageData(this.patternSize, this.patternSize);
        const pixels = tileData.data;

        const drawGrain = () => {
            for (let i = 0; i < pixels.length; i += 4) {
                // one random channel per pixel (red, green or blue) at a random intensity
                const channel = (Math.random() * 3) | 0;
                const value = (Math.random() * 256) | 0;
                pixels[i] = channel === 0 ? value : 0;
                pixels[i + 1] = channel === 1 ? value : 0;
                pixels[i + 2] = channel === 2 ? value : 0;
                pixels[i + 3] = 255;
            }
            tileCtx.putImageData(tileData, 0, 0);
            ctx.fillStyle = ctx.createPattern(tile, 'repeat')!;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const resize = () => {
            const {width, height} = canvas.getBoundingClientRect();
            const scale = devicePixelRatio / this.grainSize;
            canvas.width = Math.max(1, Math.round(width * scale));
            canvas.height = Math.max(1, Math.round(height * scale));
            drawGrain();
        };

        const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
        const frameMs = 1000 / this.fps;
        let onScreen = true;
        let rafId: number | null = null;
        let lastDraw = 0;

        const tick = (now: number) => {
            rafId = requestAnimationFrame(tick);
            // time-based so 120 Hz displays don't redraw twice as often
            if (now - lastDraw < frameMs) return;
            lastDraw = now;
            drawGrain();
        };

        // Animate only while visible on screen, in a visible tab, and without reduced motion;
        // otherwise the last frame stays as static grain.
        const update = () => {
            const shouldRun = onScreen && !document.hidden && !reducedMotion.matches;
            if (shouldRun && rafId === null) {
                rafId = requestAnimationFrame(tick);
            } else if (!shouldRun && rafId !== null) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        };

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas);
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            onScreen = entry.isIntersecting;
            update();
        });
        intersectionObserver.observe(canvas);
        document.addEventListener('visibilitychange', update);
        reducedMotion.addEventListener('change', update);

        resize();
        update();

        this.destroyRef.onDestroy(() => {
            if (rafId !== null) cancelAnimationFrame(rafId);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            document.removeEventListener('visibilitychange', update);
            reducedMotion.removeEventListener('change', update);
        });
    }
}
