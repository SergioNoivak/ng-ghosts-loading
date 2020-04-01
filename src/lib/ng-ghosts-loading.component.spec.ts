import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGhostsLoadingComponent } from './ng-ghosts-loading.component';

describe('NgGhostsLoadingComponent', () => {
  let component: NgGhostsLoadingComponent;
  let fixture: ComponentFixture<NgGhostsLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGhostsLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGhostsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
