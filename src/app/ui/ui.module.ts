import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { AccountMovementsComponent } from './pages/account-movements/account-movements.component';


@NgModule({
  declarations: [
    AccountMovementsComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ]
})
export class UiModule { }
