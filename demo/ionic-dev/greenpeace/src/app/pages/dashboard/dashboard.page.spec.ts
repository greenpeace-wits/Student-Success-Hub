import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { AuthService } from 'src/app/services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule],
      providers: [AuthService]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have an ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  it('should have a displayUserData property', () => {
    expect(component.hasOwnProperty('displayUserData')).toBeTruthy();
  });
  it('should have at least one <ion-header> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-header')).toBeTruthy();
  });

  it('should have at least one <ion-toolbar> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-toolbar')).toBeTruthy();
  });

  it('should have at least one <ion-content> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-content')).toBeTruthy();
  });

  it('should have at least one <ion-item> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-item')).toBeTruthy();
  });

  it('should have at least one <h2> tag', () => {
    expect(fixture.nativeElement.querySelector('h2')).toBeTruthy();
  });

  it('should have at least one <app-logo>', () => {
    expect(fixture.nativeElement.querySelector('app-logo')).toBeTruthy();
  });

  it('should have at least one <ion-title> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-title')).toBeTruthy();
  });


  describe('displayUserData', () => {
    it('should be undefined before ngOnInit() is called',() => {
      expect(component.displayUserData).toBeUndefined();
    });

    let authService: AuthService;
    it('should have the value of authService.userData$.user before ngOnInit() is called', (done) => {
        authService = TestBed.get(AuthService);
        authService.userData$ = new BehaviorSubject<any>({user:{STAFF_FNAME: "Andy"}});
        component.ngOnInit();
        expect(component.displayUserData).toEqual({STAFF_FNAME: "Andy"});
        done();
      });
  });

  describe('<h2>', () => {
    it('should have the text "Hello, " before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('h2').textContent).toBe("Hello, .");
    });

    let authService: AuthService;
    it('should have the text "Hello, Andy" after ngOnInit() is called with authService.userData$.user = {name: "Andy"}', (done) => {
      authService = TestBed.get(AuthService);
      authService.userData$ = new BehaviorSubject<any>({user:{STAFF_FNAME: "Andy"}});
      component.ngOnInit();
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('h2').textContent).toBe("Hello, Andy.");
      done();
    });
  });

  describe('<ion-title>', () => {
    it('should contain the text "Dashboard"', () => {
      expect(fixture.nativeElement.querySelector('ion-title').textContent).toBe('Dashboard');
    });
  });
});
