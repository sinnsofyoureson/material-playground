import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolipComponent } from './toolip.component';

describe('ToolipComponent', () => {
  let component: ToolipComponent;
  let fixture: ComponentFixture<ToolipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
