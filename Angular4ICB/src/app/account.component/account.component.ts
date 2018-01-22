import { Component, OnInit, Output, EventEmitter, ViewChild } from "@angular/core";
import { AccountService } from '../services/accountService';
import { DataService } from '../services/dataService';
import { AccountCreateModal } from './account.modal.component';
import { fadeInAnimation } from '../_animations/fade.animation';
import { slideInOutAnimation } from '../_animations/slide.animation';

@Component({
  selector: 'account-list',
  moduleId: module.id,
  templateUrl: 'account.component.html',
  providers: [AccountService],
  animations: [slideInOutAnimation],
  //host: { '[@slideInOutAnimation]': '' }
})
export class AccountComponent implements OnInit {
  public accounts: any[];
  public name = 'Khanhnd';
  public ID: any = 6;
  @ViewChild(AccountCreateModal) popup2: AccountCreateModal;
  constructor(private accountService: AccountService, private ds: DataService) {

  }
  public type: string = "default";
  btnCustomerCreate_OnClick() {

    alert(1);
    //this.popup.show(this.popup.options);
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ds.sendHeaderName('Quản lý tài khoản');
    // this.accountService.GetList().subscribe((response: any) => {
    //   this.accounts = response;
    //   console.log(response);
    // }, error => {
    //   console.log(error);
    // }
    // );
    this.accountService.GetList().then(req=>this.accounts=req).catch(error=>console.log(error));
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.ds.clearHeader();
  }
}