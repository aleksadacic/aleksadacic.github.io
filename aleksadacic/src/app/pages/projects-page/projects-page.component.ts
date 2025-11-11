import {Component} from '@angular/core';
import {NavComponent} from '../../components/nav/nav.component';
import {MenuComponent} from "../../components/menu/menu.component";
import {PROJECTS} from "./projects";
import {NoiseComponent} from "../../components/noise/noise.component";
import {LayoutComponent} from "../../components/layout/layout.component";

@Component({
    selector: 'app-projects-page',
    standalone: true,
    imports: [
        NavComponent,
        MenuComponent,
        NoiseComponent,
        LayoutComponent
    ],
    templateUrl: './projects-page.component.html',
    styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

    protected readonly PROJECTS = PROJECTS;
}
