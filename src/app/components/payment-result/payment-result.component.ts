import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-result',
  standalone: true,
  imports: [],
  templateUrl: './payment-result.component.html',
  styleUrl: './payment-result.component.scss'
})
export class PaymentResultComponent {
  router = inject(Router);

  goHome() {
    this.router.navigate(['/']);
  }
}
