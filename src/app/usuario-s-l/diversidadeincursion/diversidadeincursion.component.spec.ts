import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversidadeincursionComponent } from './diversidadeincursion.component';

describe('DiversidadeincursionComponent', () => {
  let component: DiversidadeincursionComponent;
  let fixture: ComponentFixture<DiversidadeincursionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversidadeincursionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversidadeincursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
