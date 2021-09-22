import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NfccontainerPage } from './nfccontainer.page';

describe('NfccontainerPage', () => {
  let component: NfccontainerPage;
  let fixture: ComponentFixture<NfccontainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfccontainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NfccontainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
