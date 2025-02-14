import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InAppBrowserComponent } from './in-app-browser.component';

describe('InAppBrowserComponent', () => {
  let component: InAppBrowserComponent;
  let fixture: ComponentFixture<InAppBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InAppBrowserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InAppBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
