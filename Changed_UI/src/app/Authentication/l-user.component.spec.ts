import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LUserComponent } from './l-user.component';

describe('LUserComponent', () => {
  let component: LUserComponent;
  let fixture: ComponentFixture<LUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
