import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Injector } from "@angular/core";
import { Ng4LoadingSpinnerModule } from "ng4-loading-spinner";

import { RootRoutingModule } from "./root-routing.module";

import { RootComponent } from "./root.component";

@NgModule({
  imports: [
    Ng4LoadingSpinnerModule,
    BrowserAnimationsModule,
    RootRoutingModule,
  ],
  declarations: [RootComponent],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule {}
