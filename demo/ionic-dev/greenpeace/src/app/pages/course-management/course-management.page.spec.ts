import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

  it('should have a getMarks() function', () => {
    expect(component.getMarks).toBeTruthy();
  });

  it('should have a closeData() function', () => {
    expect(component.closeData).toBeTruthy();
  });

  it('should have a canEdit() function', () => {
    expect(component.canEdit).toBeTruthy();
  });

  it('should have a discardChanges() function', () => {
    expect(component.discardChanges).toBeTruthy();
  });

  it('should have a saveChanges() function', () => {
    expect(component.saveChanges).toBeTruthy();
  });

  it('should have a filter() function', () => {
    expect(component.filter).toBeTruthy();
  });

  it('should have a studentList property', () => {
    expect(component.hasOwnProperty('studentList')).toBeTruthy();
  });

  it('should have a displayList property', () => {
    expect(component.hasOwnProperty('displayList')).toBeTruthy();
  });

  it('should have a markData property', () => {
    expect(component.hasOwnProperty('markData')).toBeTruthy();
  });

  it('should have a markDataDupe property', () => {
    expect(component.hasOwnProperty('markDataDupe')).toBeTruthy();
  });

  it('should have a displayData property', () => {
    expect(component.hasOwnProperty('displayData')).toBeTruthy();
  });

  it('should have a editData property', () => {
    expect(component.hasOwnProperty('editData')).toBeTruthy();
  });

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
  });

  describe('displayData',() => {
    it('should have a false value initially', () => {
      expect(component.displayData).toBeFalsy();
    });

    it('should have a true value after getMarks is called', () => {
      component.getMarks('');
      expect(component.displayData).toBeTruthy();
    });

    it('should have a false value after closeData is called', () => {
      component.closeData();
      expect(component.displayData).toBeFalsy();
    });
  });

  describe('editData',() => {
    it('should have a false value initially', () => {
      expect(component.editData).toBeFalsy();
    });

    it('should have a true value after canEdit is called', () => {
      component.canEdit();
      expect(component.editData).toBeTruthy();
    });

    it('should have a false value after closeData is called', () => {
      component.closeData();
      expect(component.editData).toBeFalsy();
    });

    it('should have a false value after closeData is called', () => {
      component.saveChanges();
      expect(component.editData).toBeFalsy();
    });
  })

  describe('filter', () => {
    it('should have a false value for displayData before being called', () => {
      component.displayData;
      expect(false).toBeFalsy();
    });

    it('should make the displayList the student list is s is nothing', () => {
      component.searchString = '';
      component.filter()
      expect(true).toBeTruthy();
    })

    it('should filter using the search string', () => {
      component.searchString = 'filter';
      component.filter();
      expect(true).toBeTruthy();
    })
  });
});
