import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  displayUserData: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      this.displayUserData = res.user;
    });
  }

}
