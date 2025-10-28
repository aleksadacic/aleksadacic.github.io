import {Component, HostListener, inject, signal} from '@angular/core';
import {Router} from "@angular/router";
import {UntilDestroy} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
    selector: 'app-channel-change',
    imports: [],
    templateUrl: './channel-change.component.html',
    styleUrl: './channel-change.component.scss'
})
export class ChannelChangeComponent {
    maxDigits = 2;
    buffer = signal('');
    visible = signal(false);
    private readonly router = inject(Router);
    private navTimer: any = null;
    private hideTimer: any = null;

    @HostListener('window:keydown', ['$event'])
    onKey(e: KeyboardEvent) {
        if (this.isTyping(e)) return;

        if (e.key.length === 1 && e.key >= '0' && e.key <= '9') {
            e.preventDefault();
            this.pushDigit(e.key);
            return;
        }

        if (e.key === 'Backspace') {
            if (!this.buffer()) {
                return;
            }
            e.preventDefault();
            this.buffer.set(this.buffer().slice(0, -1));
            this.scheduleNavigate();
            if (!this.buffer()) this.visible.set(false);
            return;
        }

        if (e.key === 'Enter') {
            if (this.buffer()) {
                e.preventDefault();
                this.go();
            }
            return;
        }

        if (e.key === 'Escape') {
            if (this.buffer()) {
                e.preventDefault();
                this.clear();
            }
        }
    }

    private pushDigit(d: string) {
        const next = (this.buffer() + d).slice(0, this.maxDigits);
        this.buffer.set(next);
        this.visible.set(true);
        // quicker commit when user reached max digits
        this.scheduleNavigate(next.length === this.maxDigits ? 350 : 900);
    }

    private scheduleNavigate(delay = 900) {
        clearTimeout(this.navTimer);
        this.navTimer = setTimeout(() => this.go(), delay);

        clearTimeout(this.hideTimer);
        this.hideTimer = setTimeout(() => this.visible.set(false), delay + 800);
    }

    private go() {
        const raw = this.buffer();
        if (!raw) return;
        const n = parseInt(raw, 10);
        if (!Number.isNaN(n)) {
            this.router.navigate(['/', n.toString()]).then();
        }
        this.clear();
    }

    private clear() {
        clearTimeout(this.navTimer);
        this.navTimer = null;
        clearTimeout(this.hideTimer);
        this.hideTimer = null;
        this.buffer.set('');
        this.visible.set(false);
    }

    private isTyping(e: KeyboardEvent): boolean {
        const el = e.target as HTMLElement | null;
        return !!el?.closest('input, textarea, [contenteditable=""], [contenteditable="true"]');
    }
}
