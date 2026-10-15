import {AfterViewInit, Component, ElementRef, HostListener, signal, viewChild} from '@angular/core';
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
export class CreativePageComponent implements AfterViewInit {
  posters = viewChild.required<ElementRef<HTMLElement>>('posters');
  canScrollLeft = signal(false);
  canScrollRight = signal(false);

  ngAfterViewInit() {
    // Posters size themselves once their images load, so re-check after layout settles
    new ResizeObserver(() => this.updateChevrons()).observe(this.posters().nativeElement);
    this.posters().nativeElement.querySelectorAll('img')
      .forEach(img => img.addEventListener('load', () => this.updateChevrons()));
  }

  @HostListener('window:resize')
  updateChevrons() {
    const el = this.posters().nativeElement;
    this.canScrollLeft.set(el.scrollLeft > 1);
    this.canScrollRight.set(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }

  scroll(direction: 1 | -1) {
    const el = this.posters().nativeElement;
    const poster = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = poster ? poster.offsetWidth + gap : el.clientWidth;
    el.scrollBy({left: direction * step, behavior: 'smooth'});
  }
}
