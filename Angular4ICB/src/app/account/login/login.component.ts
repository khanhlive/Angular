import {
  Component,
  AfterContentInit,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { ICheckComponent } from "angular4-icheck";
import { Router } from "@angular/router";
import { LoginService } from "../../services/login.service";

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
    console.log(event);
    let res = this.loginService.setUserLoggedIn(event.target[0].value,event.target[1].value);
    res.then(re => {
      
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
