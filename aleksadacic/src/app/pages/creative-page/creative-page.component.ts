import {Component} from '@angular/core';
import {NavComponent} from '../../components/nav/nav.component';
import {MenuComponent} from "../../components/menu/menu.component";
import {NgOptimizedImage} from "@angular/common";
import {LayoutComponent} from "../../components/layout/layout.component";

@Component({
  selector: 'app-creative-page',
  standalone: true,
    imports: [
        NavComponent,
        MenuComponent,
        NgOptimizedImage,
        LayoutComponent
    ],
  templateUrl: './creative-page.component.html',
  styleUrl: './creative-page.component.scss'
})
export class CreativePageComponent {

}
