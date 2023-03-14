import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleherbssComponent } from './singleherbss.component';

describe('SingleherbssComponent', () => {
  let component: SingleherbssComponent;
  let fixture: ComponentFixture<SingleherbssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleherbssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleherbssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
