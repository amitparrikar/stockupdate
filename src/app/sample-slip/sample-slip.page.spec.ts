import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SampleSlipPage } from './sample-slip.page';

describe('SampleSlipPage', () => {
  let component: SampleSlipPage;
  let fixture: ComponentFixture<SampleSlipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleSlipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SampleSlipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
