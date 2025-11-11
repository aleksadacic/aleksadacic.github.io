import {Component} from '@angular/core';
import {NavComponent} from '../../components/nav/nav.component';
import {MenuComponent} from "../../components/menu/menu.component";
import {PROJECTS} from "./projects";
import {NoiseComponent} from "../../components/noise/noise.component";

@Component({
    selector: 'app-projects-page',
    standalone: true,
    imports: [
        NavComponent,
        MenuComponent,
        NoiseComponent
    ],
    templateUrl: './projects-page.component.html',
    styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

    protected readonly PROJECTS = PROJECTS;
}
