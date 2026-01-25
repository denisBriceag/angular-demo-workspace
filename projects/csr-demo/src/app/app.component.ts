import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { DOCUMENT } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOption, provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DemoAddressFormComponent } from './demo-address-form/demo-address-form.component';
import { MatDivider } from '@angular/material/list';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSelect } from '@angular/material/select';
import { NavigationBarComponent } from '@lib/components/navigation-bar/navigation-bar.component';
import { DemoType } from '@lib/types/demo.type';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '@lib/services/notification/notification.service';
import { MatBadge } from '@angular/material/badge';

interface Food {
  value: string;
  viewValue: string;
}

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
    MatDivider,
    MatIconButton,
    MatFabButton,
    MatMiniFabButton,
    RouterLink,
    MatProgressSpinner,
    NavigationBarComponent,
    MatSelect,
    MatOption,
    MatBadge,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private readonly _document = inject(DOCUMENT);
  private readonly _notificationService = inject(NotificationService);

  dialogMessage = viewChild<TemplateRef<unknown>>('dialogMessage');
  private readonly _demoObject: DemoType = {
    demo: true,
  };

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  protected readonly title = signal('csr-demo');

  ngOnInit() {
    this._document.fonts.ready.then(() => {
      this._document.documentElement.classList.add('mat-icon-loaded');
    });
  }

  openSnackBar(): void {
    this._notificationService.snackBar({
      announcementMessage: 'We inform you about service changes',
      title: 'Message heading',
      message: 'We inform you about service changes. We inform you about service changes.',
      mode: 'error',
    });
  }

  openDialog(): void {
    this._notificationService.dialog({
      title: 'Confirm Your Action',
      message:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
        '\n' +
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    });
  }
}
