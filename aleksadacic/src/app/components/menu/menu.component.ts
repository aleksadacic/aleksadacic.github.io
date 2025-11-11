import {
    Component,
    effect,
    ElementRef,
    HostListener,
    inject,
    QueryList,
    Renderer2,
    signal,
    ViewChildren
} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";
import {FlickerService} from "../../services/flicker.service";

@Component({
    selector: 'app-menu',
    imports: [
        NgOptimizedImage
    ],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})
export class MenuComponent {
    open = signal(false);
    selectedIndex = -1;
    protected copySuccessVisible: boolean = false;
    private readonly router = inject(Router);
    private readonly flickerService = inject(FlickerService);
    @ViewChildren('menuBtn', {read: ElementRef})
    private readonly menuButtons!: QueryList<ElementRef<HTMLElement>>;
    private readonly renderer = inject(Renderer2);

    constructor() {
        // If 'open' is a signal in your component, reselect first item when it opens
        effect(() => {
            // @ts-ignore if open is declared elsewhere in your file
            if (this.open?.()) {
                this.selectedIndex = -1;
                queueMicrotask(() => this.applySelection());
            }
        });

        effect(() => {
            if (this.open?.() || !this.open()) {
                this.flickerService.trigger();
            }
        });
    }

    @HostListener('window:keydown', ['$event'])
    handleKeys(e: KeyboardEvent) {
        // @ts-ignore if open is declared elsewhere in your file
        if (!this.open?.()) return;

        if (e.key === 'Backspace') {
            this.open.set(false);
        }

        const len = this.menuButtons?.length ?? 0;
        if (!len) return;

        if (e.key === 'ArrowDown' || e.key === 'Down') {
            e.preventDefault();
            this.selectedIndex = (this.selectedIndex + 1) % len;
            this.applySelection();
        } else if (e.key === 'ArrowUp' || e.key === 'Up') {
            e.preventDefault();
            this.selectedIndex = (this.selectedIndex - 1 + len) % len;
            this.applySelection();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const el = this.menuButtons.toArray()[this.selectedIndex]?.nativeElement;
            el?.click(); // triggers your existing (click)="navigate(...)"
        }
    }

    navigate(path: string) {
        this.router.navigate([path]).then();
    }

    copyToClipboard(innerText: string) {
        navigator.clipboard.writeText(innerText.toLowerCase()).then(() => {
            this.flickerService.trigger(10);
            this.copySuccessVisible = true;
            setTimeout(() => {
                this.copySuccessVisible = false;
            }, 2000)
        });
    }

    private applySelection() {
        const items = this.menuButtons.toArray();
        for (let i = 0; i < items.length; i++) {
            const el = items[i].nativeElement;
            if (i === this.selectedIndex) {
                this.renderer.addClass(el, 'selected');
                el.setAttribute('data-selected', 'true');
                // Optional: focus for screen readers
                el.focus({preventScroll: true});
            } else {
                this.renderer.removeClass(el, 'selected');
                el.removeAttribute('data-selected');
            }
        }
    }
}
