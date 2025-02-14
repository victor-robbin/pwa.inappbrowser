import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InAppBrowserComponent } from './components/in-app-browser/in-app-browser.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pwa.inappbrowser';
}
