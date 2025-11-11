import {AfterViewInit, Component} from '@angular/core';
import {NavComponent} from '../../components/nav/nav.component';
import {NoiseComponent} from "../../components/noise/noise.component";
import {MenuComponent} from "../../components/menu/menu.component";
import {LayoutComponent} from "../../components/layout/layout.component";

@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [
        NavComponent,
        NoiseComponent,
        MenuComponent,
        LayoutComponent
    ],
    templateUrl: './about-page.component.html',
    styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements AfterViewInit {
    protected visibleIndex = 1;

    ngAfterViewInit() {
        let index = 1;

        const animate = () => {
            this.visibleIndex = (index % 4) + 1;
            index++;
        }

        setInterval(animate, 5000);
    }

    display(index: number) {
        return index === this.visibleIndex ? 'inline-flex' : 'none';
    }
}
