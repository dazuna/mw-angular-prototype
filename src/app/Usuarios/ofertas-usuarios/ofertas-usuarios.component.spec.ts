import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasUsuariosComponent } from './ofertas-usuarios.component';

describe('OfertasUsuariosComponent', () => {
  let component: OfertasUsuariosComponent;
  let fixture: ComponentFixture<OfertasUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
