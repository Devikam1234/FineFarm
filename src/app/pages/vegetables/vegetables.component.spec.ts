import { ComponentFixture, TestBed } from '@angular/core/testing';

import { vegetablesComponent } from './vegetables.component';

describe('VegetablesComponent', () => {
  let component: vegetablesComponent;
  let fixture: ComponentFixture<vegetablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ vegetablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(vegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
