import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalerryComponent } from './image-galerry.component';

describe('ImageGalerryComponent', () => {
  let component: ImageGalerryComponent;
  let fixture: ComponentFixture<ImageGalerryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGalerryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
