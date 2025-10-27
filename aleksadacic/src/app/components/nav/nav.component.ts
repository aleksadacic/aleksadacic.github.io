import {Component, inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ClockComponent} from "../clock/clock.component";

@UntilDestroy()
@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [
        ClockComponent
    ],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
    @Input() logo: boolean = true;
    @Input() page: string = "";
    @Input() color: string = "blue"
    channelNumber?: string;
    private readonly route = inject(ActivatedRoute);

    ngOnInit() {
        this.route.url
            .pipe(untilDestroyed(this))
            .subscribe(url => {
                this.channelNumber = url[0].toString();
            })
    }
}
