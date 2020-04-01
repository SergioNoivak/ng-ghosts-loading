import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostListAnimatedComponent } from './ghost-list-animated.component';

describe('GhostListAnimatedComponent', () => {
  let component: GhostListAnimatedComponent;
  let fixture: ComponentFixture<GhostListAnimatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostListAnimatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostListAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
