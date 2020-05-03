import { RouterTestingModule } from "@angular/router/testing";
import { TestBed, async, inject } from '@angular/core/testing';

import { IndexGuard } from './index.guard';

describe('IndexGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [IndexGuard]
    });
  });

  it('should ...', inject([IndexGuard], (guard: IndexGuard) => {
    expect(guard).toBeTruthy();
  }));
});
