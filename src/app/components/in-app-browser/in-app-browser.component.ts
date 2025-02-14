import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-in-app-browser',
  standalone: true,
  imports: [],
  templateUrl: './in-app-browser.component.html',
  styleUrl: './in-app-browser.component.scss'
})
export class InAppBrowserComponent {
  @Input() url!: string;
  @Input() title: string = 'In-App Browser';
  @Output() urlChange = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  @ViewChild('browserContainer', { static: true }) containerRef!: ElementRef;

  private iframeElement!: HTMLIFrameElement;
  private messageEventListener!: () => void;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log('InAppBrowserComponent создан');
    if (!this.url) {
      console.log('URL is required to use the in-app browser.');
      return;
    }

    this.iframeElement = this.renderer.createElement('iframe');
    this.renderer.setAttribute(this.iframeElement, 'src', this.url);
    this.renderer.setStyle(this.iframeElement, 'width', '50%');
    this.renderer.setStyle(this.iframeElement, 'height', '100%');

    if (this.containerRef?.nativeElement) {
      this.renderer.appendChild(this.containerRef.nativeElement, this.iframeElement);
    }

    this.messageEventListener = this.renderer.listen('window', 'message', (event) => {
      if (event.origin !== new URL(this.url).origin) {
        console.warn('Message received from an unknown origin:', event.origin);
        return;
      }

      if (event.data && event.data.type === 'urlChange') {
        this.urlChange.emit(event.data.url);
      }
    });
  }

  closeBrowser(): void {
    this.close.emit();
  }

  ngOnDestroy(): void {
    console.log('InAppBrowserComponent удален');
    if (this.iframeElement) {
      this.renderer.removeChild(this.containerRef.nativeElement, this.iframeElement);
    }
    if (this.messageEventListener) {
      this.messageEventListener();
    }
  }
}
