import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData$ = new BehaviorSubject<any>('');

  constructor(
    private httpService: HttpService, 
    private storageService: StorageService, 
    private router: Router
    ) { }

  getUserData() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      this.userData$.next(res);
    })
  }

  signin (postData: any): Observable<any> {
    return this.httpService.post('signin', postData)
  }

  getCourseData (postData: any): Observable<any> {
    return this.httpService.post('home/course-management:get', postData)
  }

  updateMarks (postData: any): Observable<any> {
    return this.httpService.post('home/course-management:update', postData)
  }

  signout () {
    this.storageService.removeItem(AuthConstants.AUTH).then(res => {
      this.userData$.next('');
      this.router.navigate(['signin']);
    })
  }
}
