import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideNativeDateAdapter(), provideRouter(routes, withViewTransitions())],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
