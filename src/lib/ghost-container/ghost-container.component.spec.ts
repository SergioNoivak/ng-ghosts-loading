import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostContainerComponent } from './ghost-container.component';

describe('GhostContainerComponent', () => {
  let component: GhostContainerComponent;
  let fixture: ComponentFixture<GhostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
