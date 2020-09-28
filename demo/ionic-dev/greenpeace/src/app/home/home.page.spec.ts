/*
- a page with 3 tabs
- each tab has a name
- the tab is at the bottom of the page
- each tab button has an icon
- each tab button has a label
*/
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from "@angular/router/testing";
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';
import { routes } from './home-routing.module';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(),RouterTestingModule],
      providers: [HomeGuard],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have an <ion-tabs> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-tabs')).toBeTruthy();
  });

  it('should have an <ion-tab-bar> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-tab-bar')).toBeTruthy();
  });

  it('should have at least one <ion-tab-button> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-tab-button')).toBeTruthy();
  });

  it('should have at least one <ion-icon> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-icon')).toBeTruthy();
  });

  it('should have at least one <ion-label> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-label')).toBeTruthy();
  });

  describe('<ion-tab-bar>', () => {
    it('should have a slot property', () => {
      expect(fixture.nativeElement.querySelector('ion-tab-bar').slot).toBeTruthy();
    });

    it('should have a bottom slot', () => {
      expect(fixture.nativeElement.querySelector('ion-tab-bar').slot).toBe("bottom");
    });

    it('should have <ion-tab-button> elements as children',() => {
      for (let element of fixture.nativeElement.querySelector('ion-tab-bar').children) {
        expect(element.tagName).toBe('ION-TAB-BUTTON');
      }
    });

    it('should have 3 tab buttons', () => {
      expect(fixture.nativeElement.querySelector('ion-tab-bar').children.length).toEqual(3);
    });
  });

  describe('Dashboard <ion-tab-button>', () => {
    it('should have a tab property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[0].tab).toBeTruthy();
    });

    it('should have the tab property with a value "dashboard"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[0].tab).toBe("dashboard");
    });

    it('should have an <ion-icon> child', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[0].children[0].tagName).toBe("ION-ICON");
    });

    it('should have an <ion-icon> child with a name property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[0].children[0].name).toBeTruthy();
    });

    it('should have an <ion-icon> child with a name property set to "briefcase"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[0].children[0].name).toBe("briefcase");
    });

    it('should have an <ion-label> child', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[0].children[1].tagName).toBe("ION-LABEL");
    });
    
    it('should have an <ion-label> child with the text "Dashboard"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[0].children[1].textContent).toBe("Dashboard");
    });
  });

  describe('Course Management <ion-tab-button>', () => {
    it('should have a tab property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[1].tab).toBeTruthy();
    });

    it('should have the tab property with a value "dashboard"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[1].tab).toBe("course-management");
    });

    it('should have an <ion-icon> child', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[1].children[0].tagName).toBe("ION-ICON");
    });

    it('should have an <ion-icon> child with a name property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[1].children[0].name).toBeTruthy();
    });

    it('should have an <ion-icon> child with a name property set to "document"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[1].children[0].name).toBe("document");
    });

    it('should have an <ion-label> child', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[1].children[1].tagName).toBe("ION-LABEL");
    });
    
    it('should have an <ion-label> child with the text "Course Management"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[1].children[1].textContent).toBe("Course Management");
    });
  });

  describe('Settings <ion-tab-button>', () => {
    it('should have a tab property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[2].tab).toBeTruthy();
    });

    it('should have the tab property with a value "setings"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[2].tab).toBe("settings");
    });

    it('should have an <ion-icon> child', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[2].children[0].tagName).toBe("ION-ICON");
    });

    it('should have an <ion-icon> child with a name property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[2].children[0].name).toBeTruthy();
    });

    it('should have an <ion-icon> child with a name property set to "settings"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[2].children[0].name).toBe("settings");
    });

    it('should have an <ion-label> child', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[2].children[1].tagName).toBe("ION-LABEL");
    });
    
    it('should have an <ion-label> child with the text "Settings"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-tab-button')[2].children[1].textContent).toBe("Settings");
    });
  });
});

describe('HomeRoutingModule', () => {
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [RouterTestingModule.withRoutes(routes)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    router = TestBed.get(Router);
  }));

  it('should have 3 routes', () => {
    expect(router.config[0].children.length).toBe(4);
  });

  it('should have a /dashboard route', () => {
    expect(router.config[0].children[0].path).toBe('dashboard');
  });

  it('should have a /course-management path', () => {
    expect(router.config[0].children[2].path).toBe('course-management');
  });

  it('should have a /settings path', () => {
    expect(router.config[0].children[3].path).toBe('settings');
  });

  it('should redirect from / to /dashboard', () => {
    expect(router.config[0].children[1].redirectTo).toBe('dashboard');
  })

  describe('/dashboard route', () => {
    it('should have a loadChildren() function', () => {
      expect(router.config[0].children[0].loadChildren()).toBeDefined();
    });
  });

  describe('/settings route', () => {
    it('should have a loadChildren() function', () => {
      expect(router.config[0].children[3].loadChildren()).toBeDefined();
    });
  });

  describe('/course-management route', () => {
    it('should have a loadChildren() function', () => {
      expect(router.config[0].children[2].loadChildren()).toBeDefined();
    });
  });

  describe('/settings route', () => {
    it('should have a loadChildren() function', () => {
      expect(router.config[0].children[3].loadChildren()).toBeDefined();
    });
  });
});