import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game6Component } from './game6.component';

describe('Game6Component', () => {
  let component: Game6Component;
  let fixture: ComponentFixture<Game6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Game6Component]
    });
    fixture = TestBed.createComponent(Game6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
