import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowserComponent } from '../in-app-browser/in-app-browser.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { BackdropComponent } from '../shared/backdrop/backdrop.component';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [
    InAppBrowserComponent,
    BackdropComponent,
  ],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ bottom: '-100%' }),
        animate('500ms ease-in-out', style({ bottom: '0%' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ bottom: '-100%' }))
      ]),
    ])
  ]
})
export class PaymentFormComponent {
  router = inject(Router);

  opened = signal(false);

  openIframe() {
    this.opened.set(true);
  }

  closeIframe() {
    this.opened.set(false);
  }
}
