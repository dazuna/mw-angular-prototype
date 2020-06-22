import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSLComponent } from './footer-s-l.component';

describe('FooterSLComponent', () => {
  let component: FooterSLComponent;
  let fixture: ComponentFixture<FooterSLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
