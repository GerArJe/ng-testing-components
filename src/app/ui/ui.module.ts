import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { AccountMovementsComponent } from './pages/account-movements/account-movements.component';
import { CurrencyDirective } from '../directives/currency.directive';


@NgModule({
  declarations: [
    AccountMovementsComponent,
    CurrencyDirective
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ]
})
export class UiModule { }
