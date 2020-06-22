import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasUsuariosComponent } from './estadisticas-usuarios.component';

describe('EstadisticasUsuariosComponent', () => {
  let component: EstadisticasUsuariosComponent;
  let fixture: ComponentFixture<EstadisticasUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
