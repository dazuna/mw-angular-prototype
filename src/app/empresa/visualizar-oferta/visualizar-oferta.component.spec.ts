import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarOfertaComponent } from './visualizar-oferta.component';

describe('VisualizarOfertaComponent', () => {
  let component: VisualizarOfertaComponent;
  let fixture: ComponentFixture<VisualizarOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
