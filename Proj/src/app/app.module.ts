import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewflightComponent } from './viewflight/viewflight.component';
import { BookflightComponent } from './bookflight/bookflight.component';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { TypeComponent } from './type/type.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddflightComponent } from './addflight/addflight.component';
import { ScheduleflightComponent } from './scheduleflight/scheduleflight.component';
import { SearchschdueleflightComponent } from './searchschdueleflight/searchschdueleflight.component';
import { ViewschdueleflightComponent } from './viewschdueleflight/viewschdueleflight.component';
import { AddschdueleflightComponent } from './addschdueleflight/addschdueleflight.component';
import { FlightserviceComponent } from './flightservice/flightservice.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { ModifyflightComponent } from './modifyflight/modifyflight.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    
    HomeComponent,
    
    ViewflightComponent,
    
    BookflightComponent,
    
    
    
    NavbarComponent,
    
    
    
    LoginAdminComponent,
    
    
    
    TypeComponent,
    
    
    
    AdminHomeComponent,
    
    
    
    AddflightComponent,
    
    
    
    ScheduleflightComponent,
    
    
    
    SearchschdueleflightComponent,
    
    
    
    ViewschdueleflightComponent,
    
    
    
    AddschdueleflightComponent,
    
    
    
    FlightserviceComponent,
    
    
    
    SearchflightComponent,
    
    
    
    ContactComponent,
    
    
    
    AboutComponent,
    
    
    
    HomePageComponent,
    
    
    
    DeleteflightComponent,
    
    
    
    ModifyflightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
