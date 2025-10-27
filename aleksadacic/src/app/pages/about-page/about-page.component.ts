import {Component} from '@angular/core';
import {NavComponent} from '../../components/nav/nav.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
    imports: [
        NavComponent
    ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
