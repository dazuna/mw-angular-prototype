import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUsuarioResponsivoComponent } from './menu-usuario-responsivo.component';

describe('MenuUsuarioResponsivoComponent', () => {
  let component: MenuUsuarioResponsivoComponent;
  let fixture: ComponentFixture<MenuUsuarioResponsivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuUsuarioResponsivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUsuarioResponsivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
