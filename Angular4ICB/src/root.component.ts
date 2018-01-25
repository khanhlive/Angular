import { Component, OnInit } from "@angular/core";
import {
  Router,
  RouteConfigLoadStart,
  RouteConfigLoadEnd
} from "@angular/router";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";

@Component({
  selector: "app-root",
  template: `<div *ngIf="showLoading" class="visible spinner center">
    <div class="la-ball-clip-rotate-multiple la-3x">
      <div></div>
      <div></div>
      <div></div>
    </div></div>
    <router-outlet></router-outlet><ng4-loading-spinner></ng4-loading-spinner>`
})
export class RootComponent implements OnInit {
  showLoading = true;
  constructor(
    private router: Router,
    private ng4LoadingSpinnerService: Ng4LoadingSpinnerService
  ) {}
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
      } else if (event instanceof RouteConfigLoadEnd) {
        //this.ng4LoadingSpinnerService.hide();
        this.showLoading = false;
      }
    });
  }
}
