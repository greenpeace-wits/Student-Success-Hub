import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.page.html',
  styleUrls: ['./course-management.page.scss'],
})
export class CourseManagementPage implements OnInit {
  displayStudents: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      console.log(res.students);
      // this.displayStudents = res.students;  //
    });
  }

}
