import {AfterViewInit, Component, inject} from '@angular/core';
import {NavComponent} from '../../components/nav/nav.component';
import {NoiseComponent} from "../../components/noise/noise.component";
import {FlickerService} from "../../services/flicker.service";
import {MenuComponent} from "../../components/menu/menu.component";

@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [
        NavComponent,
        NoiseComponent,
        MenuComponent
    ],
    templateUrl: './about-page.component.html',
    styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements AfterViewInit {
    private visibleIndex = 1;

    ngAfterViewInit() {
        let index = 1;

        const animate = () => {
            index++;
            this.visibleIndex = index % 4 + 1;
        }

        setInterval(animate, 5000);
    }

    display(index: number) {
        return index === this.visibleIndex ? 'inline-flex' : 'none';
    }
}
