import {Component} from '@angular/core';
import {NavComponent} from '../nav/nav.component';

@Component({
  selector: 'app-creative-page',
  standalone: true,
  imports: [
    NavComponent
  ],
  templateUrl: './creative-page.component.html',
  styleUrl: './creative-page.component.scss'
})
export class CreativePageComponent {

}
