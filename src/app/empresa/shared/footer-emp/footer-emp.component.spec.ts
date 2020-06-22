import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEmpComponent } from './footer-emp.component';

describe('FooterEmpComponent', () => {
  let component: FooterEmpComponent;
  let fixture: ComponentFixture<FooterEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
