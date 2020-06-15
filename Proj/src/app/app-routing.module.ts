import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ViewflightComponent } from './viewflight/viewflight.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { TypeComponent } from './type/type.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddschdueleflightComponent } from './addschdueleflight/addschdueleflight.component';
import { SearchschdueleflightComponent } from './searchschdueleflight/searchschdueleflight.component';
import { AddflightComponent } from './addflight/addflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [{path: '' , component: HomePageComponent},
{path: 'login' , component: LoginComponent},
{path:'loginadmin', component:LoginAdminComponent},
{path: 'adminhome', component:AdminHomeComponent},
{path:'addschdueleflight', component: AddschdueleflightComponent},
{path: 'signup', component: SignUpComponent},
{path: 'home', component: HomeComponent},
{path: 'viewflight', component:ViewflightComponent},
{path:'bookflight', component:BookflightComponent},
{path: 'searchschdueleflight', component:SearchschdueleflightComponent},
{path: 'addflight', component:AddflightComponent},
{path: 'searchflight', component:SearchflightComponent},
{path:'contact', component:ContactComponent},
{path:'about', component:AboutComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
