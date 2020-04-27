import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankDepositPage } from './bank-deposit.page';

describe('BankDepositPage', () => {
  let component: BankDepositPage;
  let fixture: ComponentFixture<BankDepositPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankDepositPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankDepositPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
