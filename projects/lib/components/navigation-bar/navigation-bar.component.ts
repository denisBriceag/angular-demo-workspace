import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Renderer2,
  viewChild,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '@lib/tokens/window.token';

@Component({
  selector: 'csr-navigation-bar',
  imports: [MatIcon],
  host: { '(window:scroll)': 'onWindowScroll()' },
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent {
  private readonly _window = inject(WINDOW);
  private readonly _document = inject(DOCUMENT);
  private readonly _renderer = inject(Renderer2);

  private readonly _nav = viewChild<ElementRef<HTMLElement>>('nav');
  private readonly _navContainer = viewChild<ElementRef<HTMLElement>>('navContainer');

  onWindowScroll(): void {
    const scrollPosition =
      this._window.pageYOffset ||
      this._document.documentElement.scrollTop ||
      this._document.body.scrollTop;

    this._renderer[scrollPosition > 10 ? 'addClass' : 'removeClass'](
      this._nav()?.nativeElement,
      'nav-scrolled',
    );
    this._renderer[scrollPosition > 10 ? 'addClass' : 'removeClass'](
      this._navContainer()?.nativeElement,
      'nav-container-scrolled',
    );
  }
}
