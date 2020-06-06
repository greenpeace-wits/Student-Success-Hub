import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { AuthService } from 'src/app/services/auth.service';
import { CourseManagementPage } from './course-management.page';

describe('CourseManagementPage', () => {
  let component: CourseManagementPage;
  let fixture: ComponentFixture<CourseManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseManagementPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule],
      providers: [AuthService]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  // it('should have a displayStudents property', () => {
  //   expect(component.hasOwnProperty('displayStudents')).toBeTruthy();
  // });

  it('should have at least one <ion-header> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-header')).toBeTruthy();
  });

  it('should have at least one <ion-toolbar> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-toolbar')).toBeTruthy();
  });

  it('should have at least one <ion-title> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-title')).toBeTruthy();
  });

  describe('<ion-title>', () => {
    it('should have the text "Course Management"', () => {
      expect(fixture.nativeElement.querySelector('ion-title').textContent).toBe("Course Management");
    });
  })
});
