import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisHitchsComponent } from './mis-hitchs.component';

describe('MisHitchsComponent', () => {
  let component: MisHitchsComponent;
  let fixture: ComponentFixture<MisHitchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisHitchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisHitchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
