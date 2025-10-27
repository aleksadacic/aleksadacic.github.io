import {Component, HostListener, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {ChannelChangeComponent} from "./components/channel-change/channel-change.component";
import {FlickerComponent} from "./components/flicker/flicker.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, ChannelChangeComponent, FlickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    private readonly router = inject(Router);

    @HostListener('window:keydown', ['$event'])
    onKeydown(e: KeyboardEvent) {
        if (this.isTyping(e)) return;

        if (e.key === '1') {
            e.preventDefault();
            this.router.navigate(['/1']).then();
        }

        if (e.key === '2') {
            e.preventDefault();
            this.router.navigate(['/2']).then();
        }

        if (e.key === '3') {
            e.preventDefault();
            this.router.navigate(['/3']).then();
        }

        // Esc -> home
        if (e.key === 'Backspace') {
            this.router.navigate(['/']).then();
        }
    }

    private isTyping(e: KeyboardEvent): boolean {
        const el = e.target as HTMLElement | null;
        if (!el) return false;
        return !!el.closest('input, textarea, [contenteditable=""], [contenteditable="true"]');
    }
}
