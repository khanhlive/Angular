import { Component, OnInit } from "@angular/core";
import { LoginService } from "../services/login.service";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.css"],
  providers: [LoginService]
})
export class AppHeaderComponent implements OnInit {
  fullname:string='';
  constructor(private loginService: LoginService) {}
  logout(): void {
    this.loginService.logout();
  }
  ngOnInit() {
    this.fullname=this.loginService.getFullname();
  }
}
