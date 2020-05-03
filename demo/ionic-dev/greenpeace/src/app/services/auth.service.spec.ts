import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { AuthService } from './auth.service';
import { HttpService } from './http.service';
import { AppRoutingModule } from '../app-routing.module';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,RouterTestingModule],
    providers: [HttpService,AppRoutingModule]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  //TODO: add more tests
});
