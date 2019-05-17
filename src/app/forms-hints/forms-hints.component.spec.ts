import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsHintsComponent } from './forms-hints.component';

describe('FormsHintsComponent', () => {
  let component: FormsHintsComponent;
  let fixture: ComponentFixture<FormsHintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsHintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
