import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Directionality } from '@angular/cdk/bidi';
import {
  NotificationComponent,
  NotificationData,
} from '@lib/components/notification/notification.component';
import { DialogComponent, DialogData } from '@lib/components/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly _snackBar = inject(MatSnackBar);
  private readonly _dialog = inject(MatDialog);
  private readonly _direction = inject(Directionality);

  snackBar(config: NotificationData): MatSnackBarRef<NotificationComponent> {
    return this._snackBar.openFromComponent(NotificationComponent, {
      announcementMessage: config.announcementMessage,
      politeness: config?.politeness ?? 'polite',
      panelClass: [`custom-snackbar-class--${config.mode}`, 'custom-snackbar-animation'],
      duration: 3000,
      direction: this._direction.value,
      data: {
        title: config.title,
        message: config?.message,
        template: config?.template,
        mode: config.mode,
      },
    });
  }

  dialog(config: DialogData): MatDialogRef<DialogComponent, DialogData> {
    return this._dialog.open(DialogComponent, {
      panelClass: 'custom-dialog',
      closeOnNavigation: true,
      restoreFocus: true,
      enterAnimationDuration: 100,
      exitAnimationDuration: 100,
      role: config?.isCritical ? 'dialog' : 'alertdialog',
      disableClose: config?.disableClose ?? false,
      data: {
        title: config.title,
        message: config?.message,
        template: config?.template,
        isCritical: config?.isCritical ?? false,
        cancelLabel: config?.cancelLabel ?? 'Cancel',
        confirmLabel: config?.confirmLabel ?? 'Confirm',
      },
    });
  }
}
