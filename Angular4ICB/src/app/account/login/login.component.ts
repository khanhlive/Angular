import {
  Component,
  AfterContentInit,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { ICheckComponent } from "angular4-icheck";
import { Router } from "@angular/router";
import { LoginService } from "../../services/login.service";
declare var $: any;

@Component({
  selector: "login-form",
  moduleId: module.id,
  templateUrl: "login.component.html",
  providers: [LoginService]
})
export class LoginComponent {
  @ViewChild("rememberCheckbox") ckbRemember: ICheckComponent;
  remember: any;
  constructor(private route: Router, private loginService: LoginService) {}
  loginSubmit(event) {
    //event.preventDefault();
    //console.log(event);
    //console.log(event.target.elements[0].value);
    this.loginService.setUserLoggedIn();
    let res = this.loginService.setUserLoggedIn();
    res.then(re => {
      if (re.status == 200) {
        console.log(re.json());
        localStorage.setItem("Angular_token", JSON.stringify(re.json()));
        this.route.navigateByUrl("/app");
      } else {
        alert("Sai tai khoan");
      } //this.loginService.getToken();
    });

    //console.log(this.loginService.getToken());
    //this.route.navigateByUrl('/app');
    return false;
  }

  rememberChange(event: any) {
    console.log(event.target.nativeElement.checked);
  }
}
