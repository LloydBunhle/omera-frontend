import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { Role } from './model/role';
import { RegistrationComponent } from './registration/registration.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path : '' ,component:LoginComponent},
  {path:'register-page',component:RegistrationComponent},
    {
        path: 'admin',
        component: AdminDashboardComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'home',
        component: UserDashboardComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
