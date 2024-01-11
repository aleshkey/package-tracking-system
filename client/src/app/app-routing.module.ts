import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";
import {IndexComponent} from "./component/index/index.component";
import {AuthGuardService} from "./helper/auth-guard.service";
import {AddComponent} from "./component/add/add.component";
import {PackageComponent} from "./component/package/package.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'index', component: IndexComponent, canActivate: [AuthGuardService]},
  {path: 'add', component: AddComponent, canActivate:[AuthGuardService]},
  {path: 'details/:id', component: PackageComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
