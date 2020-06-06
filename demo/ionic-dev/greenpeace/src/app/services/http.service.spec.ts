import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });

    service = TestBed.get(HttpService);
  
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a post function', () => {
    expect(service.post).toBeTruthy();
  });

  //TODO: add more tests
});
