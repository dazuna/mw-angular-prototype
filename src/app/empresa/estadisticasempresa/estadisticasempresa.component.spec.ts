import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasempresaComponent } from './estadisticasempresa.component';

describe('EstadisticasempresaComponent', () => {
  let component: EstadisticasempresaComponent;
  let fixture: ComponentFixture<EstadisticasempresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasempresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
