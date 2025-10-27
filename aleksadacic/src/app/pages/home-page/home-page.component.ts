import {Component} from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [
        MenuComponent
    ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
