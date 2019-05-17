import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPrefixComponent } from './forms-prefix.component';

describe('FormsPrefixComponent', () => {
  let component: FormsPrefixComponent;
  let fixture: ComponentFixture<FormsPrefixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsPrefixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsPrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
