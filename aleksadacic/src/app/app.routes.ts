import {Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {CreativePageComponent} from './pages/creative-page/creative-page.component';
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {ProjectsPageComponent} from "./pages/projects-page/projects-page.component";

export const routes: Routes = [
    {
        path: "1",
        component: AboutPageComponent
    },
    {
        path: "2",
        component: ProjectsPageComponent
    },
    {
        path: "3",
        component: CreativePageComponent
    },
    {
        path: "0",
        redirectTo: ""
    },
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "**",
        redirectTo: "not-found"
    },
    {
        path: "not-found",
        component: NotFoundPageComponent
    }
];
