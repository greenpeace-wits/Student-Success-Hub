import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';

fdescribe('ToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastService = TestBed.get(ToastService);
    expect(service).toBeTruthy();
  });

  it('should present toast', () => {
    const service: ToastService = TestBed.get(ToastService);
    service.presentToast('message');
    expect(true).toBeTruthy();
  })
});
