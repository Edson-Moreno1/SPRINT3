import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGridComponent } from './list-grid.component';

describe('ListGridComponent', () => {
  let component: ListGridComponent;
  let fixture: ComponentFixture<ListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
