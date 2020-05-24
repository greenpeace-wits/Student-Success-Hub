import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { SignInPage } from './signin.page';
import { AuthService } from 'src/app/services/auth.service';
import { of, throwError } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

describe('SignInPage', () => {
  let component: SignInPage;
  let fixture: ComponentFixture<SignInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [AuthService],
      imports: [IonicModule.forRoot(),HttpClientTestingModule,RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least one <ion-header>', () => {
    expect(fixture.nativeElement.querySelector('ion-header')).toBeTruthy();
  });

  it('should have at least one <ion-toolbar>', () => {
    expect(fixture.nativeElement.querySelector('ion-toolbar')).toBeTruthy();
  });

  it('should have at least one <ion-title>', () => {
    expect(fixture.nativeElement.querySelector('ion-title')).toBeTruthy();
  });

  it('should have at least one <ion-content>', () => {
    expect(fixture.nativeElement.querySelector('ion-content')).toBeTruthy();
  });
  
  it('should have at least one <app-logo>', () => {
    expect(fixture.nativeElement.querySelector('app-logo')).toBeTruthy();
  });

  it('should have at least one <form>', () => {
    expect(fixture.nativeElement.querySelector('form')).toBeTruthy();
  });

  it('should have at least one <ion-list>', () => {
    expect(fixture.nativeElement.querySelector('ion-list')).toBeTruthy();
  });

  it('should have at least one <ion-item>', () => {
    expect(fixture.nativeElement.querySelector('ion-item')).toBeTruthy();
  });

  it('should have at least one <ion-label>', () => {
    expect(fixture.nativeElement.querySelector('ion-label')).toBeTruthy();
  });

  it('should have at least one <ion-input>', () => {
    expect(fixture.nativeElement.querySelector('ion-input')).toBeTruthy();
  });

  it('should have at least one <a>', () => {
    expect(fixture.nativeElement.querySelector('a')).toBeTruthy();
  });

  it('should have at least one <ion-button>', () => {
    expect(fixture.nativeElement.querySelector('ion-button')).toBeTruthy();
  });

  describe('Wits Email <ion-item>', () => {
    it('should have a <ion-label> child', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[0].children[0].tagName).toBe('ION-LABEL');
    });

    it('should have an <ion-label> child with a position property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[0].children[0].position).toBeTruthy();
    });

    it('should have an <ion-label> child with a position property set to "stacked"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[0].children[0].position).toBe('stacked');
    });

    it('should have an <ion-label> child with the text "Wits Email"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[0].children[0].textContent).toBe('Wits Email');
    });

    it('should have a <ion-input> child', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[0].children[1].tagName).toBe('ION-INPUT');
    });

    it('should have an <ion-input> child with a type property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[0].children[1].type).toBeTruthy();
    });

    it('should have an <ion-input> child with a name property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[0].children[1].name).toBeTruthy();
    });

    it('should have an <ion-input> child with a name property set to "witsemail"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[0].children[1].name).toBe('witsemail');
    });

    it('should have an <ion-input> child with no text initially"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[0].children[1].textContent).toBe('');
    });

    it('should have an <ion-input> child with an ngModel binding"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[0].children[1].ngModel).toBeDefined();
    });

    it('should have an <ion-input> child with an ngModel binding to set postData.witsemail"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[0].children[1].ngModel).toBe("");
    });
  });

  describe('Password <ion-item>', () => {
    it('should have a <ion-label> child', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[1].children[0].tagName).toBe('ION-LABEL');
    });

    it('should have an <ion-label> child with a position property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[1].children[0].position).toBeTruthy();
    });

    it('should have an <ion-label> child with a position property set to "stacked"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[1].children[0].position).toBe('stacked');
    });

    it('should have an <ion-label> child with the text "Password"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[1].children[0].textContent).toBe('Password');
    });

    it('should have a <ion-input> child', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[1].children[1].tagName).toBe('ION-INPUT');
    });

    it('should have an <ion-input> child with a type property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[1].children[1].type).toBeTruthy();
    });

    it('should have an <ion-input> child with a name property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[1].children[1].name).toBeTruthy();
    });

    it('should have an <ion-input> child with a name property set to "password"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[1].children[1].name).toBe('password');
    });

    it('should have an <ion-input> child with no text initially"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[1].children[1].textContent).toBe('');
    });

    it('should have an <ion-input> child with an ngModel binding"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[1].children[1].ngModel).toBeDefined();
    }); 

    it('should have an <ion-input> child with an ngModel binding to set postData.password"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[1].children[1].ngModel).toBe("");
    });
  });

  describe('Forgotten password <ion-item>', () => {
    it('should have a lines property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[2].lines).toBeTruthy();
    });

    it('should have a lines property set to none', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[2].lines).toBe("none");
    });

    it('should have an <a> child', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[2].children[0].tagName).toBe('A');
    });

    it('should have an <a> child with an href property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[2].children[0].href).toBeTruthy();
    });

    it('should have an <a> child with the text "Have you forgotten your password?"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-item')[2].children[0].textContent).toBe('Have you forgotten your password?');
    });
  });

  describe('Sign in <ion-button>', () => {
    it('should have an expand property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].expand).toBeTruthy();
    });

    it('should have an expand property set to block', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].expand).toBe('block');
    });

    it('should have the text "Sign In"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].textContent).toBe("Sign In");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].click).toBeTruthy();
    });

    it('should call loginAction() when clicked', () => {
      let spy = spyOn(component,'loginAction');
      fixture.nativeElement.getElementsByTagName('ion-button')[0].click();
      expect(component.loginAction).toHaveBeenCalled();
    });
  });

  describe('Sign in with Moodle <ion-button>', () => {
    it('should have an expand property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[1].expand).toBeTruthy();
    });

    it('should have an expand property set to block', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[1].expand).toBe('block');
    });

    it('should have the text "Sign In with Moodle"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[1].textContent).toBe("Sign In with Moodle");
    });
  });

  it('should have a validateInputs() function', () => {
    expect(component.validateInputs).toBeTruthy();
  });

  it('should have a loginAction() function', () => {
    expect(component.loginAction).toBeTruthy();
  });

  describe('validateInputs()', () => {
    it('should return false if there was no password input and no email input', () => {
      expect(component.validateInputs()).toBeFalsy();
    });

    it('should return false if there was no password input and there is email input', () => {
      component.postData.witsemail = 'something';
      expect(component.validateInputs()).toBeFalsy();
    });

    it('should return false if there was password input but there is no email input', () => {
      component.postData.password = 'something';
      expect(component.validateInputs()).toBeFalsy();
    });

    it('should return true if there was password input and email input', () => {
      component.postData.password = 'something';
      component.postData.witsemail = 'something';
      expect(component.validateInputs()).toBeTruthy();
    });
  });

  describe('loginAction()', () => {
    it('should call authService.signin() if validateInputs() is true', (done) => {
      let authService = TestBed.get(AuthService);
      spyOn(component,'validateInputs').and.returnValue(true);
      spyOn(authService,'signin').and.returnValue(of(''));
      component.loginAction();
      expect(authService.signin).toHaveBeenCalled();
      done();
    });

    it('should call toastService.presentToast() with the text "Incorrect username or password" if validateInputs() is true but the response from authService.signin() is an error', (done) => {
      let authService = TestBed.get(AuthService);
      let toastService = TestBed.get(ToastService);
      spyOn(toastService,'presentToast');
      spyOn(component,'validateInputs').and.returnValue(true);
      spyOn(authService,'signin').and.returnValue(of({error: true}));
      component.loginAction();
      expect(toastService.presentToast).toHaveBeenCalledWith("Incorrect username or password");
      done();
    });

    it('should call storageService.store() if validateInputs() is true but the response from authService.signin() is not an error', (done) => {
      let authService = TestBed.get(AuthService);
      let storageService = TestBed.get(StorageService);
      spyOn(storageService,'store');
      spyOn(component,'validateInputs').and.returnValue(true);
      spyOn(authService,'signin').and.returnValue(of({error: false}));
      component.loginAction();
      expect(storageService.store).toHaveBeenCalled();
      done();
    });

    it('should change the route to \\home if validateInputs() is true but the response from authService.signin() is not an error', (done) => {
      let authService = TestBed.get(AuthService);
      let router = TestBed.get(Router);
      spyOn(component,'validateInputs').and.returnValue(true);
      spyOn(authService,'signin').and.returnValue(of({error: false}));
      spyOn(router,'navigate');
      component.loginAction();
      expect(router.navigate).toHaveBeenCalledWith(['home']);
      done();
    });
    
    it('should call toastService.presentToast() with the text "Network connection error." if validateInputs() is true but authService.signin() is could not contact the server', (done) => {
      let authService = TestBed.get(AuthService);
      let toastService = TestBed.get(ToastService);
      spyOn(toastService,'presentToast');
      spyOn(authService,'signin').and.returnValue(throwError({}));
      spyOn(component,'validateInputs').and.returnValue(true);
      component.loginAction();
      expect(toastService.presentToast).toHaveBeenCalledWith("Network connection error.");
      done();
    });

    it('should call toastService.presentToast() if validateInputs() is false', (done) => {
      let toastService = TestBed.get(ToastService);
      spyOn(component,'validateInputs').and.returnValue(false);
      spyOn(toastService,'presentToast');
      component.loginAction();
      expect(toastService.presentToast).toHaveBeenCalled();
      done();
    });

    it('should present a toast with the message "Please enter a wits email address and password." if no password and no email were entered', (done) => {
      let toastService = TestBed.get(ToastService);
      spyOn(toastService,'presentToast');
      spyOn(component,'validateInputs').and.returnValue(false);
      component.loginAction();
      expect(toastService.presentToast).toHaveBeenCalledWith("Please enter a wits email address and password.");
      done();
    });

    it('should present a toast with the message "Please enter a password." if no password was entered', (done) => {
      let toastService = TestBed.get(ToastService);
      spyOn(toastService,'presentToast');
      spyOn(component,'validateInputs').and.returnValue(false);
      component.postData.witsemail = 'something'
      component.loginAction();
      expect(toastService.presentToast).toHaveBeenCalledWith("Please enter a password.");
      done();
    });

    it('should present a toast with the message "Please enter a wits email address." if no email address was entered', (done) => {
      let toastService = TestBed.get(ToastService);
      spyOn(toastService,'presentToast');
      spyOn(component,'validateInputs').and.returnValue(false);
      component.postData.password = 'something'
      component.loginAction();
      expect(toastService.presentToast).toHaveBeenCalledWith("Please enter a wits email address.");
      done();
    });

    it('should be called if the Sign In button is clicked', (done) => {
      spyOn(component,'loginAction');
      fixture.nativeElement.getElementsByTagName('ion-button')[0].click();
      expect(component.loginAction).toHaveBeenCalled();
      done();
    });
  });
});
