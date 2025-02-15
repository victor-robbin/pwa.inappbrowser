import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowserComponent } from '../in-app-browser/in-app-browser.component';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [

  ],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss'
})
export class PaymentFormComponent {
  router = inject(Router);

  openIframe() {
    this.router.navigate(['/iframe']);
  }
}
