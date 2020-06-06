import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserDataResolver } from './user-data.resolver';
import { AuthService } from '../services/auth.service';

describe('UserDataService', () => {
  let resolver: UserDataResolver;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule,RouterTestingModule]
    });

    resolver = TestBed.get(UserDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should have a resolve() function', () => {
    expect(resolver.resolve).toBeTruthy();
  });

  it('should call authService.getUserData when resolve() function is run', () => {
    authService = TestBed.get(AuthService);
    spyOn(authService,'getUserData');
    resolver.resolve();
    expect(authService.getUserData).toHaveBeenCalled();
  });
});
