import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { AriaLivePoliteness } from '@angular/cdk/a11y';

export type NotificationMode = 'info' | 'success' | 'error' | 'warning';
export type NotificationData = {
  title: string;
  message: string;
  politeness?: AriaLivePoliteness;
  announcementMessage: string;
  template?: TemplateRef<unknown>;
  mode: NotificationMode;
};

@Component({
  selector: 'csr-notification',
  imports: [MatIcon, MatIconButton],
  template: `
    <button
      matIconButton
      class="notification__close text-body-default-500"
      aria-label="'Close notification'"
      (click)="snackBarRef.dismiss()"
    >
      <i class="mat-icon" aria-hidden="true">close</i>
    </button>

    <div class="notification__container">
      <mat-icon class="mt-2">{{ iconMap[data.mode] }}</mat-icon>

      <div class="me-12">
        <p class="text-body-lg-500">{{ data.title }}</p>
        <p class="text-body-sm">
          @if (data.message) {
            {{ data.message }}
          }

          <ng-container #template />
        </p>
      </div>
    </div>
  `,
  styleUrl: './notification.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent implements AfterViewInit {
  private readonly _container = viewChild('template', { read: ViewContainerRef });

  readonly data = inject<NotificationData>(MAT_SNACK_BAR_DATA);
  readonly snackBarRef = inject<MatSnackBarRef<NotificationComponent>>(MatSnackBarRef);

  @HostBinding('attr.class')
  notificationClass = 'notification__' + this.data.mode;

  readonly iconMap = {
    info: 'info',
    success: 'check_circle',
    error: 'error',
    warning: 'warning',
  };

  ngAfterViewInit(): void {
    if (this.data.template) {
      this._container()?.createEmbeddedView(this.data.template);
    }
  }
}
