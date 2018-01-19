import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccountComponent } from '../account.component/account.component';
import { CustomerComponent } from '../customer.component/customer.component';
import { Route } from '@angular/router/src/config';
import { Router } from '@angular/router/src/router';
import { LoginComponent } from '../login.component/login.component';
import { AppComponent } from '../app.component/app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../guard/auth.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: '', redirectTo:'dashboard', pathMatch:'full' },
                    { path: 'customers', component: CustomerComponent },
                    { path: 'accounts', component: AccountComponent },
                    { path: 'dashboard', component: DashboardComponent ,canActivate:[AuthGuard]}
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting{}
// const routing: Routes = [
//     { path: '', component: LoginComponent },
//     { path: 'customers', component: CustomerComponent },
//     { path: 'accounts', component: AccountComponent }
// ]
// export const appRoutes = RouterModule.forRoot(routing);