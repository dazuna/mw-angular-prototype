import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosCondicionesUserComponent } from './terminos-condiciones-user.component';

describe('TerminosCondicionesUserComponent', () => {
  let component: TerminosCondicionesUserComponent;
  let fixture: ComponentFixture<TerminosCondicionesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminosCondicionesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminosCondicionesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
