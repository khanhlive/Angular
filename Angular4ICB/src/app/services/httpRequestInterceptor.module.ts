import { Injectable, NgModule } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModel } from "@angular/forms/src/directives/ng_model";
import { LoginService } from "./login.service";

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  constructor(private loginService:LoginService){}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization:
          this.loginService.getTypeToken()+" "+ this.loginService.getToken()
      }
    });
    return next.handle(req);
  }
}
@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true
    }
  ]
})
export class InterceptorModule {}
