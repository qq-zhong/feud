import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game8Component } from './game8.component';

describe('Game8Component', () => {
  let component: Game8Component;
  let fixture: ComponentFixture<Game8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Game8Component]
    });
    fixture = TestBed.createComponent(Game8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
