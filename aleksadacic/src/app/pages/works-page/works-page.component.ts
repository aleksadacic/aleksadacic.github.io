import {Component} from '@angular/core';
import {NavComponent} from '../../components/nav/nav.component';

@Component({
  selector: 'app-works-page',
  standalone: true,
  imports: [
    NavComponent
  ],
  templateUrl: './works-page.component.html',
  styleUrl: './works-page.component.scss'
})
export class WorksPageComponent {

}
