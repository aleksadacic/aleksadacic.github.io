import {Component, signal, OnDestroy} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-clock',
    standalone: true,
    imports: [DatePipe],
    templateUrl: './clock.component.html',
})
export class ClockComponent implements OnDestroy {
    now = signal(new Date());
    private id = setInterval(() => this.now.set(new Date()), 1000);

    ngOnDestroy() {
        clearInterval(this.id);
    }
}
