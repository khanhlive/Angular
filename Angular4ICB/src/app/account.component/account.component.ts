import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { AccountService } from "../services/accountService";
import { DataService } from "../services/dataService";
import { AccountCreateModal } from "./account.modal.component";
import { fadeInAnimation } from "../_animations/fade.animation";
import { slideInOutAnimation } from "../_animations/slide.animation";
import {
  SnackBarService,
  NotifyType
} from "../toasts/toast-notification.component";

@Component({
  selector: "account-list",
  moduleId: module.id,
  templateUrl: "account.component.html",
  providers: [AccountService]
  //animations: [fadeInAnimation],

  //host: { '[@fadeInAnimation]': '' }
})
export class AccountComponent implements OnInit {
  public accounts: any[];
  public name = "Khanhnd";
  public ID: number = null;
  @ViewChild(AccountCreateModal) modalCreate: AccountCreateModal;
  constructor(
    private accountService: AccountService,
    private ds: DataService,
    private notify: SnackBarService
  ) {}
  public type: string = "default";
  btnCustomerCreate_OnClick() {
    this.ID = null;
    this.modalCreate.openModal();
  }
  createHandler(status: boolean) {
    if (status) {
      this.BindingAccounts();
    }
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ds.sendHeaderName("Quản lý tài khoản");
    // this.accountService.GetList().subscribe((response: any) => {
    //   this.accounts = response;
    //   console.log(response);
    // }, error => {
    //   console.log(error);
    // }
    // );
    this.BindingAccounts();
  }
  BindingAccounts(): void {
    this.accountService
      .GetList()
      .then(req => (this.accounts = req))
      .catch(error => console.log(error));
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.ds.clearHeader();
  }

  EditAccount(account) {
    this.ID = account.ID;
    this.modalCreate.openModal(this.ID);
  }

  deleteAccount(account) {
    if (confirm(`Bạn có muốn xóa tài khoản: "${account.Username}" không?`)) {
      this.accountService.Delete(account.ID).then(res => {
        if (res == 0) {
          this.notify.ShowNotify(`Tài khoản: "${account.Username}" đã được xóa thành công!`, NotifyType.Success);
          this.BindingAccounts();
        } else {
          this.notify.ShowNotify('Xóa tài khoản thất bại, thử lại sau.', NotifyType.Danger);
        }
      });
    }
  }
}
