import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPasswordComponent } from './forms-password.component';

describe('FormsPasswordComponent', () => {
  let component: FormsPasswordComponent;
  let fixture: ComponentFixture<FormsPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
