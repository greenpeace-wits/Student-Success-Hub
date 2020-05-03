import { RouterTestingModule } from "@angular/router/testing";
import { TestBed, async, inject } from '@angular/core/testing';

import { HomeGuard } from './home.guard';

describe('HomeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [HomeGuard]
    });
  });

  it('should ...', inject([HomeGuard], (guard: HomeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
