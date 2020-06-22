import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloticasPrivacidadComponent } from './ploticas-privacidad.component';

describe('PloticasPrivacidadComponent', () => {
  let component: PloticasPrivacidadComponent;
  let fixture: ComponentFixture<PloticasPrivacidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloticasPrivacidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloticasPrivacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
