import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InFrameComponent } from './in-frame.component';

describe('InFrameComponent', () => {
  let component: InFrameComponent;
  let fixture: ComponentFixture<InFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
