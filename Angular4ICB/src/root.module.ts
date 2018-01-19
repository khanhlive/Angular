import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';


import { RootRoutingModule } from './root-routing.module';


import { RootComponent } from './root.component';



@NgModule({
  imports: [
    
    BrowserAnimationsModule,
    RootRoutingModule
  ],
  declarations: [
    RootComponent
  ],
  providers: [
    
  ],
  bootstrap: [RootComponent]
})
export class RootModule {

}