import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { SignInPage } from './signin.page';
import { AuthService } from 'src/app/services/auth.service';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
