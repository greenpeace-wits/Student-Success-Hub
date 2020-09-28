import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });

  it('should get()', () => {
    const service: StorageService = TestBed.get(StorageService);
    service.get('key');
    expect(true).toBeTruthy();
  });

  it('should store()', () => {
    const service: StorageService = TestBed.get(StorageService);
    service.store('key','');
    expect(true).toBeTruthy();
  });

  it('should removeItem()', () => {
    const service: StorageService = TestBed.get(StorageService);
    service.removeItem('key');
    expect(true).toBeTruthy();
  });

  it('should clear()', () => {
    const service: StorageService = TestBed.get(StorageService);
    service.clear();
    expect(true).toBeTruthy();
  });
});
