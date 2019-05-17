import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsOutlinedComponent } from './forms-outlined.component';

describe('FormsOutlinedComponent', () => {
  let component: FormsOutlinedComponent;
  let fixture: ComponentFixture<FormsOutlinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsOutlinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsOutlinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
