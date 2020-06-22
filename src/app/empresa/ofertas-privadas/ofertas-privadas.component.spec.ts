import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasPrivadasComponent } from './ofertas-privadas.component';

describe('OfertasPrivadasComponent', () => {
  let component: OfertasPrivadasComponent;
  let fixture: ComponentFixture<OfertasPrivadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasPrivadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasPrivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
