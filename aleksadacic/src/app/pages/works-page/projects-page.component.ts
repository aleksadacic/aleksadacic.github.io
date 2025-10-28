import {Component} from '@angular/core';
import {NavComponent} from '../../components/nav/nav.component';

@Component({
    selector: 'app-projects-page',
    standalone: true,
    imports: [
        NavComponent
    ],
    templateUrl: './projects-page.component.html',
    styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

}
