import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSLComponent } from './index-s-l.component';

describe('IndexSLComponent', () => {
  let component: IndexSLComponent;
  let fixture: ComponentFixture<IndexSLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
