import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ChannelChangeComponent} from "./components/channel-change/channel-change.component";
import {FlickerComponent} from "./components/flicker/flicker.component";
import {NoiseComponent} from "./components/noise/noise.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ChannelChangeComponent, FlickerComponent, NoiseComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
}
