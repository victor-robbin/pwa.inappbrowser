import { Component, inject } from '@angular/core';
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
  isPaying = false;
  bankUrl = '/bank'; // Эмуляция URL банка

  startPayment() {
    this.isPaying = true;
  }

  onUrlChange(newUrl: string) {
    if (newUrl.includes('/payment-result')) {
      this.isPaying = false; // Закрываем iframe при переходе на результат
    }
  }

  closeBrowser() {
    this.isPaying = false;
  }
}
