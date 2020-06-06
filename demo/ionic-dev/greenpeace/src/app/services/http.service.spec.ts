import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });

    httpService = TestBed.get(HttpService);
  
  })

  it('should be created', () => {
    expect(httpService).toBeTruthy();
  });

  it('should have a post function', () => {
    expect(httpService.post).toBeTruthy();
  });

  it('should call httpClient.post when post() function is run', () => {
    spyOn(httpService,'post');
    httpService.post('',null);
    expect(httpService.post).toHaveBeenCalled();
  });
});
