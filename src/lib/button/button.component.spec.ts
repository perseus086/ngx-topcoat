import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpcButton } from './button.component';

describe('ButtonComponent', () => {
  let component: TpcButton;
  let fixture: ComponentFixture<TpcButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpcButton ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpcButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
