import {
  Component,
  OnInit,
  ViewChild,
  Input,
  AfterViewInit,
  ElementRef,
  TemplateRef,
  Output,
  EventEmitter
} from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";

import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { ValidationErrors } from "@angular/forms/src/directives/validators";
import { matchOtherValidator } from "../shared/match.validator";
import { AccountService } from "../services/accountService";
import {
  SnackBarService,
  NotifyType
} from "../toasts/toast-notification.component";
import { Account } from "../models/account";

@Component({
  selector: "account-create-popup",
  moduleId: module.id,
  templateUrl: "account.modal.component.html"
})
export class AccountCreateModal implements OnInit, AfterViewInit {
  modalRef: BsModalRef;
  AccountModel: FormGroup;
  modalTitle: string;
  isActive: boolean = false;
  isLocked: boolean = false;
  constructor(
    private _elRef: ElementRef,
    private modalService: BsModalService,
    private accountService: AccountService,
    private notify: SnackBarService
  ) {}

  @Input() accountId: number;
  @Output() createDone: EventEmitter<boolean> = new EventEmitter<boolean>();
  public account: Account = new Account();
  @ViewChild("modalcreate") modal: TemplateRef<any>;
  ngOnInit() {
    this.AccountModel = new FormGroup({
      ID: new FormControl(""),
      Fullname: new FormControl("", Validators.required),
      Username: new FormControl("", {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50)
        ],
        updateOn: "change"
      }),
      Password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      RetypePassword: new FormControl("", matchOtherValidator("Password")),
      Email: new FormControl("", [Validators.required, Validators.email]),
      PhoneNumber: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(11)
      ]),
      Role: new FormControl("", [Validators.required]),
      IsActive: new FormControl(""),
      IsLocked: new FormControl("")
    });
  }
  openModal(id?: number) {
    if (!id) {
      this.AccountModel.controls["Password"].setValidators([
        Validators.minLength(6),
        Validators.required
      ]);
      this.AccountModel.updateValueAndValidity();
      this.accountId = null;
      this.modalTitle = "Tạo tài khoản";
      this.account = new Account();
      this.modalRef = this.modalService.show(this.modal, { class: "" });
      this.AccountModel.reset();
    } else {
      this.AccountModel.reset();
      this.modalTitle = "Cập nhật tài khoản";
      this.accountId = id;
      this.AccountModel.controls["Password"].setValidators([
        Validators.minLength(6)
      ]);
      this.AccountModel.updateValueAndValidity();
      this.getAccount().then(res => {
        this.AccountModel.setValue({
          ID: this.account.ID,
          Fullname: this.account.Fullname,
          Username: this.account.Username,
          Password: "",
          RetypePassword: "",
          Email: this.account.Email,
          PhoneNumber: this.account.PhoneNumber,
          Role: this.account.Role,
          IsActive: this.account.IsActive,
          IsLocked: this.account.IsLocked
        });
        this.modalRef = this.modalService.show(this.modal, { class: "" });
      });
    }
  }
  closeModal() {
    this.modalRef.hide();
  }
  ngAfterViewInit() {}
  Add(account: any) {
    account.CreateTime = this.getToday() + " 00:00:00";
    this.accountService
      .Add(account)
      .then(res => {
        if (res.Status == 0) {
          this.createDone.emit(true);
          this.closeModal();
          this.notify.ShowNotify(res.Message, NotifyType.Success);
        } else {
          this.createDone.emit(false);
          this.notify.ShowNotify(res.Message, NotifyType.Danger);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  Edit(account: any) {
    this.accountService
      .Edit(account.ID, account)
      .then(res => {
        if (res.Status == 0) {
          this.createDone.emit(true);
          this.closeModal();
          this.notify.ShowNotify(res.Message, NotifyType.Success);
        } else {
          this.createDone.emit(false);
          this.notify.ShowNotify(res.Message, NotifyType.Danger);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  btnOK_Click(account) {
    account.IsActive = this.isActive;
    account.IsLocked = this.isLocked;
    if (account.ID) {
      this.Edit(account);
    } else this.Add(account);

    return false;
  }

  accountIsActiveChange(event) {
    this.isActive = event.target.nativeElement.checked;
  }
  accountIsLockChange(event) {
    this.isLocked = event.target.nativeElement.checked;
  }
  getAccount(): Promise<any> {
    return this.accountService.GetID(this.accountId).then(
      res => {
        this.account = res as Account;
      },
      error => {
        this.account = new Account();
      }
    );
  }
  getToday() {
    let today1 = new Date();
    let dd = today1.getDate();
    let mm = today1.getMonth() + 1; //January is 0!
    let result: string = "";
    var yyyy = today1.getFullYear();

    if (mm < 10) {
      result += mm;
    } else result += mm;
    if (dd < 10) {
      result += "/0" + dd;
    } else result += "/" + dd;
    return (result += "/" + yyyy);
  }
}
