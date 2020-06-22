import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasEmpComponent } from './tarjetas-emp.component';

describe('TarjetasEmpComponent', () => {
  let component: TarjetasEmpComponent;
  let fixture: ComponentFixture<TarjetasEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetasEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
