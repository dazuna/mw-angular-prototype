import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEmpresaResponsivoComponent } from './menu-empresa-responsivo.component';

describe('MenuEmpresaResponsivoComponent', () => {
  let component: MenuEmpresaResponsivoComponent;
  let fixture: ComponentFixture<MenuEmpresaResponsivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEmpresaResponsivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEmpresaResponsivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
