import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDueComponent } from './total-due.component';

describe('TotalDueComponent', () => {
  let component: TotalDueComponent;
  let fixture: ComponentFixture<TotalDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
