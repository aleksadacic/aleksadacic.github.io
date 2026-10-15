import {Component, signal, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-clock',
    standalone: true,
    imports: [DatePipe],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './clock.component.html',
})
export class ClockComponent implements OnDestroy {
    now = signal(new Date());
    private readonly id = setInterval(() => this.now.set(new Date()), 1000);

    ngOnDestroy() {
        clearInterval(this.id);
    }
}
