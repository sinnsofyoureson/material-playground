import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCommentComponent } from './forms-comment.component';

describe('FormsCommentComponent', () => {
  let component: FormsCommentComponent;
  let fixture: ComponentFixture<FormsCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
