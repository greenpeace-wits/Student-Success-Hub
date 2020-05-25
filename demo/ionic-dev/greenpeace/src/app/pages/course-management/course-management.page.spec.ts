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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
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
  })
});
