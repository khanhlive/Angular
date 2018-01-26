import {
  Component,
  AfterContentInit,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { ICheckComponent } from "angular4-icheck";
import { Router } from "@angular/router";
import { LoginService } from "../../services/login.service";
import { ConfigService } from "../../services/config.service";

@Component({
  selector: "login-form",
  moduleId: module.id,
  templateUrl: "login.component.html",
  providers: [LoginService, ConfigService]
})
export class LoginComponent {
  showLoading = false;
  @ViewChild("rememberCheckbox") ckbRemember: ICheckComponent;
  remember: any;
  constructor(private route: Router, private loginService: LoginService) {}
  loginSubmit(event) {
    this.showLoading = true;
    let res = this.loginService.setUserLoggedIn(
      event.target[0].value,
      event.target[1].value
    );
    res.then(re => {
      this.showLoading = false;
      if (re) {
        //localStorage.setItem("Angular_token", JSON.stringify(re));
        this.route.navigateByUrl("/app");
      }
    });

    return false;
  }

  rememberChange(event: any) {
    console.log(event.target.nativeElement.checked);
  }
}
