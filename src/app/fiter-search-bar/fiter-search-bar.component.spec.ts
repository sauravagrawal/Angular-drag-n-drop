import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiterSearchBarComponent } from './fiter-search-bar.component';

describe('FiterSearchBarComponent', () => {
  let component: FiterSearchBarComponent;
  let fixture: ComponentFixture<FiterSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiterSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiterSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
