import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaEmpresaComponent } from './ayuda-empresa.component';

describe('AyudaEmpresaComponent', () => {
  let component: AyudaEmpresaComponent;
  let fixture: ComponentFixture<AyudaEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudaEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
