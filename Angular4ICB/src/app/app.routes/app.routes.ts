import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from '../account.component/account.component';
import { CustomerComponent } from '../customer.component/customer.component';
import { Route } from '@angular/router/src/config';
import { Router } from '@angular/router/src/router';
const routing: Routes = [
    { path: '', component: AccountComponent },
    { path: 'customers', component: CustomerComponent }
]
export const appRoutes=RouterModule.forRoot(routing);