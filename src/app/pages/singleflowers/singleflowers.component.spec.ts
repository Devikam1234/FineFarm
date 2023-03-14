import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleflowersComponent } from './singleflowers.component';

describe('SingleflowersComponent', () => {
  let component: SingleflowersComponent;
  let fixture: ComponentFixture<SingleflowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleflowersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleflowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
