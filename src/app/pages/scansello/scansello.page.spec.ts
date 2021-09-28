import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanselloPage } from './scansello.page';

describe('ScanselloPage', () => {
  let component: ScanselloPage;
  let fixture: ComponentFixture<ScanselloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanselloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanselloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
