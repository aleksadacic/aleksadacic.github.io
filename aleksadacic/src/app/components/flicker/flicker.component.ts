import {Component, inject} from '@angular/core';
import {FlickerService} from "../../services/flicker.service";

@Component({
    selector: 'app-flicker',
    imports: [],
    templateUrl: './flicker.component.html',
    styleUrl: './flicker.component.scss'
})
export class FlickerComponent {
    svc = inject(FlickerService);
}
