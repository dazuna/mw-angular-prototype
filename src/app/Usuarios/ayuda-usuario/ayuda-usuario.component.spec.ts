import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaUsuarioComponent } from './ayuda-usuario.component';

describe('AyudaUsuarioComponent', () => {
  let component: AyudaUsuarioComponent;
  let fixture: ComponentFixture<AyudaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
