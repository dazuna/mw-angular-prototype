import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EEditarPerfilComponent } from './e-editar-perfil.component';

describe('EEditarPerfilComponent', () => {
  let component: EEditarPerfilComponent;
  let fixture: ComponentFixture<EEditarPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EEditarPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EEditarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
