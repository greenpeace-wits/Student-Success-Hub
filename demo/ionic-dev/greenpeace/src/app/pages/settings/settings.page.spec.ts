import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';
import { AuthService } from '../../services/auth.service';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule ],
      providers: [ AuthService ]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a logoutAction() function', () => {
    expect(component.logoutAction).toBeTruthy();
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

  it('should have at least one <ion-content> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-content')).toBeTruthy();
  });

  it('should have at least one <ion-button> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-button')).toBeTruthy();
  });

  it('should have at least one <ion-title> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-title')).toBeTruthy();
  });

  describe('<ion-title>', () => {
    it('should have the text "Settings"', () => {
      expect(fixture.nativeElement.querySelector('ion-title').textContent).toBe('Settings');
    });
  });

  describe('<ion-button>', () => {
    it('should have the text "Sign Out"', () => {
      expect(fixture.nativeElement.querySelector('ion-button').textContent).toBe('Sign Out');
    });

    it('should have an expand property', () => {
      expect(fixture.nativeElement.querySelector('ion-button').expand).toBeTruthy();
    });

    it('should have an expand property set to block', () => {
      expect(fixture.nativeElement.querySelector('ion-button').expand).toBe("block");
    });

    it('should have click event', () => {
      expect(fixture.nativeElement.querySelector('ion-button').click).toBeTruthy();
    });


    it('should call logoutAction() when clicked', () => {
      let spy = spyOn(component,'logoutAction');
      fixture.nativeElement.querySelector('ion-button').click();
      expect(component.logoutAction).toHaveBeenCalled();
    });
  });

  describe('logoutAction()', () => {
    it('should not be called if the button has not been clicked', () => {
      let spy = spyOn(component,'logoutAction');
      expect(component.logoutAction).not.toHaveBeenCalled();
    });
  });
});
