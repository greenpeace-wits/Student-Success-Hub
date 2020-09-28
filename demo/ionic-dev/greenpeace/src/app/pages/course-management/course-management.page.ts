import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.page.html',
  styleUrls: ['./course-management.page.scss'],
})
export class CourseManagementPage implements OnInit {
  studentList: any; displayList: any; markData: any; markDataDupe: any; displayData: boolean; editData: boolean;
  public searchString: string;

  constructor(
    private authService: AuthService,
    private toastService: ToastService
    ) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      this.studentList = res.students; 
      this.displayList = this.studentList;
      this.markData = {};
      this.markDataDupe = {};
      this.displayData = false;
      this.editData = false;
    });
  };

  getMarks(student_number){
    this.displayData = true;
    return ''

    // this.authService.getCourseData(student_number).subscribe(
    //   (res: any) => {
    //     this.markData = {student: this.studentList.filter(function (student){
    //       return student.STU_NUMBER.toString().includes(student_number.toString())
    //     }),data:Object.values(res)[0]};
    //     for (var m in this.markData.data){
          
    //       this.markData.data[m] = Number(this.markData.data[m])
    //     }
    //     this.markDataDupe = this.markData;
    //   },
    //   (error: any) => {
    //     console.log(error)
    //     this.displayData = false;
    // });
  }

  closeData(){
    this.discardChanges();
    this.displayData = false;
  }

  canEdit(){
    this.editData = true;
  }

  discardChanges(){
    this.markDataDupe = this.markData;
    this.editData = false;
  }

  saveChanges(){
    for (var m in this.markDataDupe.data){
      this.markDataDupe.data[m] = Number(this.markDataDupe.data[m])
    }
    this.markData = this.markDataDupe;
    this.editData = false;
    this.authService.updateMarks(this.markData).subscribe(
      (res: any) => {
        this.toastService.presentToast("Update successful.");
      });
  }

  filter(){
    var s = this.searchString;
    if (s == ''){
      this.displayList = this.studentList;
    }
    else {
      this.displayList = this.studentList.filter(function (student){
        return student.STU_NUMBER.toString().includes(s) || 
               student.STUDENT_FNAME.toLowerCase().includes(s) ||
               student.STUDENT_LNAME.toLowerCase().includes(s);
      });
    }
  }

}
