import {Component} from '@angular/core';
import {NavComponent} from '../../components/nav/nav.component';
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [
        NavComponent,
        NgOptimizedImage
    ],
    templateUrl: './about-page.component.html',
    styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
    protected successVisible = false;

    copyToClipboard(innerText: string) {
        navigator.clipboard.writeText(innerText).then(() => {
            this.successVisible = true;
            setTimeout(() => {
                this.successVisible = false;
            }, 1000)
        });
    }
}
