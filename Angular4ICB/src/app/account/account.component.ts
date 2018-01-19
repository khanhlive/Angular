import { Component, OnInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'account.component.html',
  moduleId: module.id
})
export class AccountComponent implements AfterViewInit { name = 'Angular';
 ngAfterViewInit(){
   let body=document.getElementsByTagName('body')[0];
   body.removeAttribute('class');
   body.classList.add('login-page');
 }
}
