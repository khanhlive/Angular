import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/dataService';
import { Subscription } from 'rxjs/Subscription';
import { ToastsManager  } from 'ng2-toastr/ng2-toastr';
import { NotifyType, SnackBarService } from '../toasts/toast-notification.component';
@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.css']
})
export class AsideLeftComponent implements OnInit {
  headerName: any;
  subscription: Subscription;
  constructor(private _title: Title, private ds: DataService, private notify: SnackBarService,private view:ViewContainerRef) {this.subscription = this.ds.getHeaderName().subscribe(x => this.headerName = x); }

  ngOnInit() {
  }
ngOnDestroy() {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.subscription.unsubscribe();
}
}
