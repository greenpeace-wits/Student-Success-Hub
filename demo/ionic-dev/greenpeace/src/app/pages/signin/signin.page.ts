import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SignInPage implements OnInit {
  public postData = {
    witsemail: '',
    password: ''
  }

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private storageService: StorageService,
    private toastService: ToastService
    ) { }

  ngOnInit() {
  }

  validateInputs() {
    let witsemail = this.postData.witsemail.trim();
    let password = this.postData.password.trim();

    return ( 
      this.postData.witsemail && 
      this.postData.password && 
      witsemail.length > 0 && 
      password.length > 0)
  }

  loginAction() {
    if (this.validateInputs()) {
      this.authService.signin(this.postData).subscribe(
        (res: any) => {
          this.storageService.store(AuthConstants.AUTH, res);
          this.router.navigate(['home']);
        },
        (error: any) => {
          if (error.status != 401){
            this.toastService.presentToast("Network error.");
          }
          else {
            this.toastService.presentToast(error.error);
          }
      });
    }
    else {
      if (this.postData.witsemail.trim().length == 0 && this.postData.password.trim().length == 0) {
        this.toastService.presentToast("Please enter a wits email address and password.");
      }
      else {
        if (this.postData.password.trim().length == 0) {
          this.toastService.presentToast("Please enter a password.");
        }
        if (this.postData.witsemail.trim().length == 0) {
          this.toastService.presentToast("Please enter a wits email address.");
        }
      }
    }
  }
}
