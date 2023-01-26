import { TestBed } from '@angular/core/testing';

import { SecuredLoginGuard } from './secured-login.guard';

describe('SecuredLoginGuard', () => {
  let guard: SecuredLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecuredLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
