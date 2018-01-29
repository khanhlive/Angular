import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import { ConfigService } from "../services/config.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private config: ConfigService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let flag = this.loginService.getUserLoggedIn();
    if (flag) {
      
      let data = next.data;
      if (data) {
        let roles = data.alowRoles;
        if (roles) {
          let accountRole = this.loginService.getRole();
          
          if (roles.indexOf(accountRole) != -1) {
            let moduleConfig = this.config.getConfigLocal();
            let id = next.data.id;
            if (id && id != 0) {
              let module;
              for (let i = 0; i < moduleConfig.length; i++) {
                if (moduleConfig[i].ModuleId == id) {
                  module = moduleConfig[i];
                  if (module) {
                    return module.CanActive;
                  } else {
                    alert("Bạn không có quyền để truy cập vào chức năng này");
                    this.router.navigateByUrl("/app/dashboard");
                    return false;
                  }
                }
              }
              
            } else return true;
          } else {
            alert("Bạn không có quyền để truy cập vào chức năng này 1");
            this.router.navigateByUrl("/app/dashboard");
            return false;
          }
        } else return true;
      } else return true;
    } else {
      this.router.navigateByUrl("/account/login");
      return false;
    }
  }
}
