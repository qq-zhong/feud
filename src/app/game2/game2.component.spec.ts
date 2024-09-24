import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game2Component } from './game2.component';

describe('Game2Component', () => {
  let component: Game2Component;
  let fixture: ComponentFixture<Game2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Game2Component]
    });
    fixture = TestBed.createComponent(Game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
