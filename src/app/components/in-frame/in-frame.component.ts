import { Component } from '@angular/core';

@Component({
  selector: 'app-in-frame',
  standalone: true,
  imports: [],
  templateUrl: './in-frame.component.html',
  styleUrl: './in-frame.component.scss'
})
export class InFrameComponent {
  goToResult(event: Event) {
    event.preventDefault();
    window.parent.postMessage({ type: 'closeAndGoToResult' }, '*');
  }
}
