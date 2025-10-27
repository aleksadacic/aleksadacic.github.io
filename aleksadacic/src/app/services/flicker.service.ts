// flicker.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FlickerService {
    readonly visible = signal(false);

    trigger(ms = 50) {
        this.visible.set(true);
        setTimeout(() => this.visible.set(false), ms);
    }
}
