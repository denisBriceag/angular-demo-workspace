import { Component, inject, signal, afterNextRender, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { DemoType } from '@lib/types/demo.type';
import { DemoAddressFormComponent } from './demo-address-form/demo-address-form.component';
import { NavigationBarComponent } from '@lib/components/navigation-bar/navigation-bar.component';
import { WINDOW } from '@lib/tokens/window.token';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButton,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    DemoAddressFormComponent,
    DemoAddressFormComponent,
    NavigationBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly _document = inject(DOCUMENT);
  private readonly _window = inject(WINDOW);
  private readonly _demoObject: DemoType = {
    demo: true,
  };

  protected readonly title = signal('ssr-demo');

  constructor() {
    afterNextRender(() => {
      console.log(this._window);
      this._document.fonts.ready.then(() => {
        this._document.documentElement.classList.add('mat-icon-loaded');
      });
    });
  }
}
