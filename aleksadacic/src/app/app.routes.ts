import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {CreativePageComponent} from './creative-page/creative-page.component';
import {WorksPageComponent} from './works-page/works-page.component';

export const routes: Routes = [
  {
    path: "about",
    component: AboutPageComponent
  },
  {
    path: "creative",
    component: CreativePageComponent
  },
  {
    path: "works",
    component: WorksPageComponent
  },
  {
    path: "",
    component: HomePageComponent
  }
];
