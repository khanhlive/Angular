import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component/app.component';
import { appRoutes } from './app.routes/app.routes';
import { AccountComponent } from './account.component/account.component';
import { CustomerComponent, DialogOverviewExampleDialog } from './customer.component/customer.component';
import { DataService } from './services/dataService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountCreateModal } from './account.component/account.modal.component';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { ToastMessagesComponent } from './toasts/toast-message.component';
import { ToastService } from './services/toast.service';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};
import { NotificationsModule, NotificationsService } from 'angular4-notify';
@NgModule({
  imports: [
    
    BrowserModule,
    HttpModule,
    appRoutes,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    CdkTableModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule],
  declarations: [AppComponent, AccountComponent, CustomerComponent, AccountCreateModal, DialogOverviewExampleDialog],
  entryComponents: [CustomerComponent, DialogOverviewExampleDialog],
  bootstrap: [AppComponent,],
  providers: [DataService,]
})
export class AppModule { }

