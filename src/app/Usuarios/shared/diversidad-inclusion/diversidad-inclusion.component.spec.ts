import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversidadInclusionComponent } from './diversidad-inclusion.component';

describe('DiversidadInclusionComponent', () => {
  let component: DiversidadInclusionComponent;
  let fixture: ComponentFixture<DiversidadInclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversidadInclusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversidadInclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
