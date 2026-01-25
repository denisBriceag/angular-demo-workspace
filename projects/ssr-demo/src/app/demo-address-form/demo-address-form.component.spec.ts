import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAddressFormComponent } from './demo-address-form.component';

describe('DemoAddressFormComponent', () => {
  let component: DemoAddressFormComponent;
  let fixture: ComponentFixture<DemoAddressFormComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
