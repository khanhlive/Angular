import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    //console.log(this.loginService.getUserLoggedIn());
    if (this.loginService.getUserLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl("/account/login");
      return false;
    }
  }
}
