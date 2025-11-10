import {Component, Input} from '@angular/core';
import {UntilDestroy} from "@ngneat/until-destroy";
import {ClockComponent} from "../clock/clock.component";
import {RouterLink} from "@angular/router";

@UntilDestroy()
@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [
        ClockComponent,
        RouterLink
    ],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent {
    @Input() logo: boolean = true;
    @Input() page: string = "";
    @Input() color: string = "var(--rgb-blue)"
}
