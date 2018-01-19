import { Component, OnInit, ViewContainerRef, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/dataService';
import { Subscription } from 'rxjs/Subscription';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotifyType, SnackBarService } from '../toasts/toast-notification.component';
import { Menus, MenuItem } from '../models/menuItem';
import { LoginService } from '../services/login.service';
declare var $:any;
@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  providers: [SnackBarService,LoginService]
})
export class AppComponent implements OnInit, AfterViewInit {
  isLogin: boolean = true;
  headerName: any;
  subscription: Subscription;
  menus: MenuItem[] = Menus;
  constructor(private _title: Title, private ds: DataService, private notify: SnackBarService, private view: ViewContainerRef,private loginService:LoginService) {
    this.subscription = this.ds.getHeaderName().subscribe(x => this.headerName = x);

  }
  public setTitle(title: string) {

    this._title.setTitle(title);
    let a = Math.floor(Math.random() * 4);
    switch (a) {
      case 0: this.notify.ShowNotify('This is a first message', NotifyType.Danger); break;
      case 1: this.notify.ShowNotify('This is a first message', NotifyType.Info); break;
      case 2: this.notify.ShowNotify('This is a first message', NotifyType.Warning); break;
      case 3: this.notify.ShowNotify('This is a first message', NotifyType.Success); break;
    }

  }
  ngOnInit() {

  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngAfterViewInit() {
    let body = document.getElementsByTagName('body')[0];
    body.removeAttribute('class');
    body.classList.add('skin-blue');
    body.classList.add('sidebar-mini');
    body.classList.add('fixed');
    console.log( $('body'));
  }
}
