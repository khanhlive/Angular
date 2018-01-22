import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.route';
import { LoginComponent } from './login/login.component';
import { ICheckModule } from 'angular4-icheck';
import { HttpModule } from '@angular/http';
import { LoginService } from '../services/login.service';

@NgModule({
  imports: [CommonModule, AccountRoutingModule,ICheckModule.forRoot({
    checkboxClass: 'icheckbox_flat-blue',
    radioClass: 'iradio_flat-blue'
  }),HttpModule],
  declarations: [AccountComponent,LoginComponent],
  bootstrap: [AccountComponent],
  providers:[LoginService]
})
export class AccountModule { }
