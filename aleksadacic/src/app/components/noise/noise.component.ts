import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
    selector: 'app-noise',
    imports: [],
    templateUrl: './noise.component.html',
    styleUrl: './noise.component.scss'
})
export class NoiseComponent implements AfterViewInit {
    @ViewChild('noise', {static: true}) noiseEl!: ElementRef<HTMLDivElement>;
    @Input() zIndex: number = 199;
    @Input() opacity: number = 0.4;
    @Input() fullscreen = true;

    ngAfterViewInit(): void {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const size = 200;
        canvas.width = size;
        canvas.height = size;

        const el = this.noiseEl.nativeElement;

        const draw = () => {
            const img = ctx.createImageData(size, size);
            const data = img.data;

            for (let i = 0; i < data.length; i += 4) {
                // pick 0 = red, 1 = green, 2 = blue
                const channel = Math.floor(Math.random() * 3);

                // default all to 0
                let r = 0, g = 0, b = 0;

                if (channel === 0) r = 255;       // red pixel
                else if (channel === 1) g = 255;  // green pixel
                else b = 255;                     // blue pixel

                data[i] = r;
                data[i + 1] = g;
                data[i + 2] = b;
                data[i + 3] = 255; // opaque
            }

            ctx.putImageData(img, 0, 0);
            el.style.backgroundImage = `url(${canvas.toDataURL()})`;
        };

        draw();
        setInterval(draw, 70); // 10 fps
    }
}