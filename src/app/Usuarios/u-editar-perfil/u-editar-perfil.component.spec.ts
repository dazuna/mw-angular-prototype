import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UEditarPerfilComponent } from './u-editar-perfil.component';

describe('UEditarPerfilComponent', () => {
  let component: UEditarPerfilComponent;
  let fixture: ComponentFixture<UEditarPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UEditarPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UEditarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
