import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsOptionComponent } from './forms-option.component';

describe('FormsOptionComponent', () => {
  let component: FormsOptionComponent;
  let fixture: ComponentFixture<FormsOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
