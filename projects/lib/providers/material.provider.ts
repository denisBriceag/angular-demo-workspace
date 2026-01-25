import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

export function provideMaterialConfig(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideNativeDateAdapter(),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
        floatLabel: 'dynamic',
        subscriptSizing: 'fixed',
      },
    },
  ]);
}
