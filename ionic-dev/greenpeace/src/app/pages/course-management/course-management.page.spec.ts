import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseManagementPage } from './course-management.page';

describe('CourseManagementPage', () => {
  let component: CourseManagementPage;
  let fixture: ComponentFixture<CourseManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseManagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
