import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { NgClass } from '@angular/common';

export type DialogData = {
  title: string;
  message?: string;
  template?: TemplateRef<unknown>;
  isCritical?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  disableClose?: boolean;
};

@Component({
  selector: 'csr-dialog',
  imports: [MatIconButton, MatDialogClose, MatButton, NgClass],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements AfterViewInit {
  private readonly _container = viewChild('template', { read: ViewContainerRef });
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  constructor() {
    console.log(this.data);
  }

  ngAfterViewInit(): void {
    if (this.data?.template) {
      this._container()?.createEmbeddedView(this.data.template);
    }
  }
}
