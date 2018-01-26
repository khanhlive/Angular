import {
  Component,
  OnInit,
  ViewContainerRef,
  AfterViewInit
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { DataService } from "../services/dataService";
import { Subscription } from "rxjs/Subscription";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import {
  NotifyType,
  SnackBarService
} from "../toasts/toast-notification.component";
import { Menus, MenuItem } from "../models/menuItem";
import { LoginService } from "../services/login.service";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import {
  Router,
  RouteConfigLoadStart,
  RouteConfigLoadEnd
} from "@angular/router";
import { ConfigService } from "../services/config.service";
import { RouteAnimation } from "../_animations/route.animation";


declare var $: any;
@Component({
  selector: "my-app",
  moduleId: module.id,
  templateUrl: "app.component.html",
  providers: [SnackBarService, LoginService, ConfigService],
  animations:[RouteAnimation]
})
export class AppComponent implements OnInit, AfterViewInit {
  isLogin: boolean = true;
  headerName: any;
  subscription: Subscription;
  menus: MenuItem[] = Menus;
  ModuleList: any[] = [0];
  demo: boolean = false;
  constructor(
    private _title: Title,
    private ds: DataService,
    private notify: SnackBarService,
    private view: ViewContainerRef,
    private loginService: LoginService,
    private loading: Ng4LoadingSpinnerService,
    private router: Router,
    private config: ConfigService
  ) {
    this.subscription = this.ds
      .getHeaderName()
      .subscribe(x => (this.headerName = x));
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading.show();
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loading.hide();
      }
    });
  }
  public setTitle(title: string) {
    this._title.setTitle(title);
    let a = Math.floor(Math.random() * 4);
    switch (a) {
      case 0:
        this.notify.ShowNotify("This is a first message", NotifyType.Danger);
        break;
      case 1:
        this.notify.ShowNotify("This is a first message", NotifyType.Info);
        break;
      case 2:
        this.notify.ShowNotify("This is a first message", NotifyType.Warning);
        break;
      case 3:
        this.notify.ShowNotify("This is a first message", NotifyType.Success);
        break;
    }
  }
  ngOnInit() {
    this.config.getConfig().then(res => {
      for (let i = 0; i < res.length; i++) {
        if(res[i].CanActive){
          this.ModuleList.push(res[i].ModuleId);
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getID(outlet){
    //console.log(outlet.activatedRouteData["id"]);
    return outlet.activatedRouteData["id"];
  }
  ngAfterViewInit() {
    let body = document.getElementsByTagName("body")[0];
    body.removeAttribute("class");
    body.classList.add("skin-blue");
    body.classList.add("sidebar-mini");
    body.classList.add("fixed");
    //console.log( $('body'));
  }
}
