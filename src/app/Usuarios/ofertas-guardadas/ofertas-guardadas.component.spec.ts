import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasGuardadasComponent } from './ofertas-guardadas.component';

describe('OfertasGuardadasComponent', () => {
  let component: OfertasGuardadasComponent;
  let fixture: ComponentFixture<OfertasGuardadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasGuardadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasGuardadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
