import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTestingComponent } from './card-testing.component';

describe('CardTestingComponent', () => {
  let component: CardTestingComponent;
  let fixture: ComponentFixture<CardTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
