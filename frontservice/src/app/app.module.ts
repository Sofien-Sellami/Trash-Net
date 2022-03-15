import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TokenInterceptor } from './services/token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ForgotpasswordemailComponent, LoginComponent } from './components/email-login/email-login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EmailSignupComponent } from './components/email-signup/email-signup.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LogoutComponent } from './components/logout/logout.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';



@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    EmailSignupComponent,
    LogoutComponent,
    ForgotpasswordComponent,
    ForgotpasswordemailComponent,
    AdminDashboardComponent,
    AboutusComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDialogModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
 
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true,
    
    },
  ],
  entryComponents: [LoginComponent,ForgotpasswordemailComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }