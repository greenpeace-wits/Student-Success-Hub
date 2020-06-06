import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';
import { TestBed, inject } from '@angular/core/testing';

import { HomeGuard } from './home.guard';
import { StorageService } from '../services/storage.service';
import { routes } from '../home/home-routing.module';
import { HomePageModule } from '../home/home.module';
import { throwError } from 'rxjs';

describe('HomeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),HomePageModule],
      providers: [HomeGuard, StorageService]
    });
  });

  it('should exist', inject([HomeGuard], (guard: HomeGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should have a canActivate() function', inject([HomeGuard], (guard: HomeGuard) => {
    expect(guard.canActivate).toBeDefined();
  }));  

  describe('canActivate():', () => {
    let guard: HomeGuard;
    let storageService: StorageService;
    let storageServiceSpy: any;
    let router: Router;
    let routerSpy: any;

    it('should return false and redirect to \\signin if storage service returns false', (done) =>  {
      storageService = new StorageService;
      storageServiceSpy = spyOn(storageService,'get');
      router = TestBed.get(Router);
      routerSpy = spyOn(router,'navigate');

      storageServiceSpy.and.returnValue(Promise.resolve(false));
      router.initialNavigation();
      guard = new HomeGuard(storageService,router); 
      
      guard.canActivate()
        .then((resolve) => {
          expect(resolve).toBeFalsy();
          expect(routerSpy).toHaveBeenCalledWith(['signin']);
      done();
      });
    });

    it('should return true and not redirect to \\signin if storage service returns true', (done) =>  {
      storageService = new StorageService;
      storageServiceSpy = spyOn(storageService,'get');
      router = TestBed.get(Router);
      routerSpy = spyOn(router,'navigate');
      
      storageServiceSpy.and.returnValue(Promise.resolve(true));
      router.initialNavigation();
      guard = new HomeGuard(storageService,router); 
      
      guard.canActivate()
        .then((resolve) => {
          expect(resolve).toBeTruthy();
          expect(routerSpy).not.toHaveBeenCalled();
      done();
      });
    });

    it('should return true and not redirect to \\signin if storage service is unresolved', (done) =>  {
      storageService = new StorageService;
      storageServiceSpy = spyOn(storageService,'get');
      router = TestBed.get(Router);
      routerSpy = spyOn(router,'navigate');
      
      storageServiceSpy.and.returnValue(Promise.resolve(throwError({})));
      router.initialNavigation();
      guard = new HomeGuard(storageService,router); 
      
      guard.canActivate();
      done();
      expect(routerSpy).not.toHaveBeenCalled();
    });
  });
});