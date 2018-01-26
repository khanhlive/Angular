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

@Component({
  selector: "account-create-popup",
  moduleId: module.id,
  templateUrl: "account.modal.component.html"
})
export class AccountCreateModal implements OnInit, AfterViewInit {
  modalRef: BsModalRef;
  AccountModel: FormGroup;
  constructor(
    private _elRef: ElementRef,
    private modalService: BsModalService
  ) {}

  @Input() accountId: number;
  @Output() createDone: EventEmitter<boolean> = new EventEmitter<boolean>();
  public account: any = { name: "" };
  @ViewChild("modalcreate") modal: TemplateRef<any>;
  ngOnInit() {
    this.AccountModel = new FormGroup({
      Fullname: new FormControl("", Validators.required),
      Username: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required),
      RetypePassword: new FormControl("", matchOtherValidator('Password')),
      Email: new FormControl("", Validators.required),
      PhoneNumber: new FormControl("", Validators.required),
      Role: new FormControl(""),
      IsActive: new FormControl(""),
      IsLocked: new FormControl("")
    });
  }
  private custom(control): ValidationErrors {
    console.log(control);
    return {};
  }
  openModal() {
    
    this.modalRef = this.modalService.show(this.modal, { class: "" });
    this.AccountModel.reset();
  }
  closeModal() {
    //console.log( this.AccountModel.controls.RetypePassword);
    this.modalRef.hide();
  }
  ngAfterViewInit() {}
  showPopup() {
    this.getAccount();
  }

  btnOK_Click() {
    
    this.createDone.emit(true);
    //this.closeModal();
    return false;
  }

  getAccount() {
    this.account = {
      name: "Khanhnd " + this.accountId.toString()
    };
  }
}

