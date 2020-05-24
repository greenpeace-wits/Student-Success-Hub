/* TESTED
- Contains an image to be used as a logo. 
- Image is hosted at 'assets/images/wits-logo.png'.
- Image has an alt.
- The alt reads 'University of Witwatersrand Logo'.
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have an <img> tag', () => {
    expect(fixture.nativeElement.querySelector('img')).toBeTruthy();
  });

  describe('<img> tag:', () => {
    it('should have an alt property', () => {
      expect(fixture.nativeElement.querySelector('img').alt).toBeTruthy();
    });

    it('should have a src property', () => {
      expect(fixture.nativeElement.querySelector('img').src).toBeTruthy();
    });

    describe('alt:', () => {
      it('should be \'University of Witwatersrand Logo\'', () => {
        expect(fixture.nativeElement.querySelector('img').alt).toBe('University of Witwatersrand Logo');
      });
    });

    describe('src:', () => {
      it('should contain \'assets\\images\\wits-log.png\'', () => {
        expect(fixture.nativeElement.querySelector('img').src).toContain('assets/images/wits-logo.png');
      });
    });
  });
});
