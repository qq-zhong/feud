import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game5Component } from './game5.component';

describe('Game5Component', () => {
  let component: Game5Component;
  let fixture: ComponentFixture<Game5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Game5Component]
    });
    fixture = TestBed.createComponent(Game5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
