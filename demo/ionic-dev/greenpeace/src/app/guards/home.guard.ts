import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.storageService.get(AuthConstants.AUTH).then( res => {
        if (res) {
          resolve(true);
        }
        else {
          this.router.navigate(['signin']);
          resolve(false);
        }
      })
    });
  }

  constructor(public storageService: StorageService, private router: Router) { }
}
