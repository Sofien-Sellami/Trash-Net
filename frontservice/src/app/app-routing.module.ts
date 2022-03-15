import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailSignupComponent } from './components/email-signup/email-signup.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/email-login/email-login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeGuardService } from './services/home-auth-guard';
import { MapComponent } from './components/map/map.component';
 

export const dashboardRoutes  = [
  {
    path: 'profile', // child route path
    component: ProfileComponent, // child route component that the router renders
    label: 'profile',
  
  },
  {
  path: 'map', // child route path
  component: MapComponent, // child route component that the router renders
  label: 'map',

}]

export const routes  = [{
  path: '',
  component: HomeComponent,
 
  canActivate: [AuthGuardService]
},
{
  path: 'forgotpassword',
  component: ForgotpasswordComponent,
  label: 'home',
},
{
  path: 'profile',
  component: ProfileComponent,
  canActivate: [HomeGuardService],
  label: 'profile',
},
{
  path: 'aboutus',
  component: AboutusComponent,
  label: 'aboutus',
},

{
  path: 'admin-dashboard',
  component: AdminDashboardComponent,
  canActivate: [HomeGuardService],
  label: 'admin',
  children: dashboardRoutes,
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }