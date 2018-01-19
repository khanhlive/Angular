import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.route';
import { LoginComponent } from './login/login.component';
import { ICheckModule } from 'angular4-icheck';

@NgModule({
  imports: [CommonModule, AccountRoutingModule,ICheckModule.forRoot({
    checkboxClass: 'icheckbox_flat-blue',
    radioClass: 'iradio_flat-blue'
  })],
  declarations: [AccountComponent,LoginComponent],
  bootstrap: [AccountComponent]
})
export class AccountModule { }
