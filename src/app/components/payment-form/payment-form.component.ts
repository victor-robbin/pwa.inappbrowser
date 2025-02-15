import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowserComponent } from '../in-app-browser/in-app-browser.component';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [
    InAppBrowserComponent,
  ],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss'
})
export class PaymentFormComponent {
  router = inject(Router);

  opened = signal(false);

  openIframe() {
    // this.router.navigate(['/iframe']);
    this.opened.set(true);
  }
  closeIframe() {
    this.opened.set(false);
  }
}
