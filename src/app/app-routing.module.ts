import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { StepsComponent } from './steps/steps.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'steps',component:StepsComponent},
  {path:'navbar',component:NavbarComponent},
  
  {path:"",redirectTo:"home",pathMatch:"full"},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }