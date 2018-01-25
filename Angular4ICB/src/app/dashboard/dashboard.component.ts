import { Component, OnInit, ElementRef, TemplateRef } from "@angular/core";
import { LoginService } from "../services/login.service";

import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  providers: [LoginService]
})
export class DashboardComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(
    private loginService: LoginService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-lg" });
  }
}
