import { Component, ElementRef, EventEmitter, inject, input, Input, output, Output, Renderer2, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-app-browser',
  standalone: true,
  imports: [],
  templateUrl: './in-app-browser.component.html',
  styleUrl: './in-app-browser.component.scss'
})
export class InAppBrowserComponent {
  renderer = inject(Renderer2);
  element = inject(ElementRef);
  router = inject(Router);

  url = signal('/inframe');
  title = input('In-App Browser');
  close = output();
  startY = 0;

  @ViewChild('browserContainer', { static: true }) containerRef!: ElementRef;

  private iframeElement!: HTMLIFrameElement;

  constructor() { }

  ngOnInit(): void {
    this.iframeElement = this.renderer.createElement('iframe');
    this.renderer.setAttribute(this.iframeElement, 'src', this.url());

    if (this.containerRef?.nativeElement) {
      this.renderer.appendChild(this.containerRef.nativeElement, this.iframeElement);
    }

    window.addEventListener('message', this.handleMessage.bind(this));
  }

  ngAfterViewInit() {
    this.renderer.listen(this.element.nativeElement, 'touchstart', (event: TouchEvent) => {
      this.startY = event.touches[0].clientY;
    });
    this.renderer.listen(this.element.nativeElement, 'touchend', (event: TouchEvent) => {
      const endY = event.changedTouches[0].clientY;
      const deltaY = endY - this.startY;

      if (deltaY > 50) {
        this.closeBrowser();
      }
    });
  }

  handleMessage(event: MessageEvent) {
    if (event.data.type === 'closeAndGoToResult') {
      this.router.navigate(['/result'])
    }
  }

  closeBrowser(): void {
    this.close.emit();
  }

  ngOnDestroy(): void {
    if (this.iframeElement) {
      this.renderer.removeChild(this.containerRef.nativeElement, this.iframeElement);
    }

    window.removeEventListener('message', this.handleMessage);
  }
}
