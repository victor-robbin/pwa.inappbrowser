import { Component, ElementRef, EventEmitter, inject, Input, Output, Renderer2, ViewChild } from '@angular/core';
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
  router = inject(Router);

  // @Input() url!: string;
  @Input() title: string = 'In-App Browser';
  // @Output() urlChange = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  @ViewChild('browserContainer', { static: true }) containerRef!: ElementRef;

  private iframeElement!: HTMLIFrameElement;
  // private messageEventListener!: () => void;

  constructor() { }

  ngOnInit(): void {
    // console.log('InAppBrowserComponent создан');
    // if (!this.url) {
    //   console.log('URL is required to use the in-app browser.');
    //   return;
    // }

    this.iframeElement = this.renderer.createElement('iframe');
    // this.renderer.setAttribute(this.iframeElement, 'src', this.url);
    this.renderer.setAttribute(this.iframeElement, 'src', '/inframe');
    this.renderer.setStyle(this.iframeElement, 'width', '100%');
    this.renderer.setStyle(this.iframeElement, 'height', '100%');

    if (this.containerRef?.nativeElement) {
      this.renderer.appendChild(this.containerRef.nativeElement, this.iframeElement);
    }

    window.addEventListener('message', this.handleMessage.bind(this));

    // this.messageEventListener = this.renderer.listen('window', 'message', (event) => {
    //   if (event.origin !== new URL(this.url).origin) {
    //     console.warn('Message received from an unknown origin:', event.origin);
    //     return;
    //   }

    //   if (event.data && event.data.type === 'urlChange') {
    //     this.urlChange.emit(event.data.url);
    //   }
    // });
  }

  handleMessage(event: MessageEvent) {
    if (event.data.type === 'closeAndGoToResult') {
      this.router.navigate(['/result'])
    }
  }

  closeBrowser(): void {
    this.close.emit();
  }

  // closeBrowser() {
  //   this.router.navigate(['/']);
  // }

  ngOnDestroy(): void {
    // console.log('InAppBrowserComponent удален');
    if (this.iframeElement) {
      this.renderer.removeChild(this.containerRef.nativeElement, this.iframeElement);
    }
    window.removeEventListener('message', this.handleMessage);
    // if (this.messageEventListener) {
    //   this.messageEventListener();
    // }
  }
}
