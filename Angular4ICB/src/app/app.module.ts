import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastModule } from "ng2-toastr/ng2-toastr";
import { ToastOptions } from "ng2-toastr";
import { HttpClientModule } from "@angular/common/http";
import { CdkTableModule } from "@angular/cdk/table";
import { MaterialDesignModule } from "./app.material.module";
import { ChartsModule } from "ng2-charts";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgBootstrapFormValidationModule } from "ng-bootstrap-form-validation";

//router
// import { appRoutes } from './app.routes/app.routes';
import { AppRouting } from "./app.routes/app.routes";

//component
import { AccountCreateModal } from "./account.component/account.modal.component";
import { AppComponent } from "./app.component/app.component";
import { AccountComponent } from "./account.component/account.component";
import {
  CustomerComponent,
  DialogOverviewExampleDialog
} from "./customer.component/customer.component";
import { AppHeaderComponent } from "./header/app-header.component";
import { AsideLeftComponent } from "./aside-left/aside-left.component";
import { AsideRightComponent } from "./aside-right/aside-right.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { LoginComponent } from "./login.component/login.component";
import { ModalModule } from "ngx-bootstrap";

//services
import { DataService } from "./services/dataService";
import { SnackBarService } from "./toasts/toast-notification.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginService } from "./services/login.service";
import { AuthGuard } from "./guard/auth.guard";
import { InterceptorModule } from "./services/httpRequestInterceptor.module";
import { HttpModule } from "@angular/http";
import { NewsComponent } from "./news/news.component";
import { ConfigService } from "./services/config.service";
import { ICheckModule } from "angular4-icheck";
import { CUSTOM_ERRORS } from "./shared/customErrorMessage";
export class CustomOption extends ToastOptions {
  animate = "flyRight"; // you can override any options available
  newestOnTop = false;
  showCloseButton = true;
  positionClass = "toast-bottom-right";
}

@NgModule({
  imports: [
    ToastModule.forRoot(),
    ModalModule.forRoot(),
    ICheckModule.forRoot({
      checkboxClass: "icheckbox_flat-blue",
      radioClass: "iradio_flat-blue"
    }),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppRouting,
    CdkTableModule,
    MaterialDesignModule,
    InterceptorModule,
    HttpModule,
    ChartsModule,
    NgBootstrapFormValidationModule.forRoot(CUSTOM_ERRORS)
  ],
  declarations: [
    AppComponent,
    AccountComponent,
    CustomerComponent,
    AccountCreateModal,
    DialogOverviewExampleDialog,
    AppHeaderComponent,
    AsideLeftComponent,
    LoginComponent,
    AsideRightComponent,
    AppFooterComponent,
    DashboardComponent,
    NewsComponent
  ],
  entryComponents: [CustomerComponent, DialogOverviewExampleDialog],
  bootstrap: [AppComponent],
  providers: [
    DataService,
    LoginService,
    AuthGuard,
    SnackBarService,
    ConfigService,
    { provide: ToastOptions, useClass: CustomOption }
  ]
})
export class AppModule {}
