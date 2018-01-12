import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/dataService';
import { Subscription } from 'rxjs/Subscription';
import { ToastMessagesComponent } from '../toasts/toast-message.component';
import { NotificationsService } from 'angular4-notify';
@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  headerName: any;
  subscription: Subscription;
  constructor(private _title: Title, private ds: DataService, private notify: NotificationsService) {
    this.subscription = this.ds.getHeaderName().subscribe(x => this.headerName = x);
  }
  public setTitle(title: string) {
    this._title.setTitle(title);
    
  }
  ngOnInit() {
    //this.notify.addError('Error message here23232');
    //this.notify.addWarning('Some warning message');
    //this.notify.addInfo('Information message');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
