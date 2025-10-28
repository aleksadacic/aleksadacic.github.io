import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ChannelChangeComponent} from "./components/channel-change/channel-change.component";
import {FlickerComponent} from "./components/flicker/flicker.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ChannelChangeComponent, FlickerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
}
