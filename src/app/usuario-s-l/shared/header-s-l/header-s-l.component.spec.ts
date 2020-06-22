import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSLComponent } from './header-s-l.component';

describe('HeaderSLComponent', () => {
  let component: HeaderSLComponent;
  let fixture: ComponentFixture<HeaderSLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
