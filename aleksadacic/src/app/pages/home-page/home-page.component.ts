import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";

type CounterKey = 'replayL' | 'replayS' | 'replayD' | 'replayCh' | 'replayI' | 'replayTj';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        MenuComponent
    ],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    done: Record<CounterKey, boolean> = {
        replayL: false, replayS: false, replayD: false, replayCh: false, replayI: false, replayTj: false
    };

    get allDone() {
        return Object.values(this.done).every(Boolean);
    }

    ngOnInit(): void {
        this.startSpin('replayL', 150);
        this.startSpin('replayS', 200);
        this.startSpin('replayD', 250);
        this.startSpin('replayCh', 180);
        this.startSpin('replayI', 230);
        this.startSpin('replayTj', 120);
    }

    private startSpin(key: CounterKey, durationMs: number) {
        setTimeout(() => {
            this.done[key] = true;
        }, durationMs)
    }

}
