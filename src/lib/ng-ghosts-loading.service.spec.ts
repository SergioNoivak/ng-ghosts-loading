import { TestBed } from '@angular/core/testing';

import { NgGhostsLoadingService } from './ng-ghosts-loading.service';

describe('NgGhostsLoadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgGhostsLoadingService = TestBed.get(NgGhostsLoadingService);
    expect(service).toBeTruthy();
  });
});
