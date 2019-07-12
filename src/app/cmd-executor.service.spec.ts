import { TestBed } from '@angular/core/testing';

import { CmdExecutorService } from './cmd-executor.service';

describe('CmdExecutorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmdExecutorService = TestBed.get(CmdExecutorService);
    expect(service).toBeTruthy();
  });
});
