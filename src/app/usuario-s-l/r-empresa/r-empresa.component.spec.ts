import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { REmpresaComponent } from './r-empresa.component';

describe('REmpresaComponent', () => {
  let component: REmpresaComponent;
  let fixture: ComponentFixture<REmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ REmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(REmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
