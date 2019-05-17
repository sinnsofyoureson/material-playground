import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleExpansionComponent } from './simple-expansion.component';

describe('SimpleExpansionComponent', () => {
  let component: SimpleExpansionComponent;
  let fixture: ComponentFixture<SimpleExpansionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleExpansionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
