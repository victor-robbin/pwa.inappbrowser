import { Routes } from '@angular/router';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { InAppBrowserComponent } from './components/in-app-browser/in-app-browser.component';
import { PaymentResultComponent } from './components/payment-result/payment-result.component';

export const routes: Routes = [
    {
        path: '', component: PaymentFormComponent
    },
    {
        path: 'result', component: PaymentResultComponent
    },
];
