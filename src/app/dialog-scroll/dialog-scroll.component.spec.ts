import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogScrollComponent } from './dialog-scroll.component';

describe('DialogScrollComponent', () => {
  let component: DialogScrollComponent;
  let fixture: ComponentFixture<DialogScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
