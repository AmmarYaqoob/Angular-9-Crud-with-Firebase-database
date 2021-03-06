import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { SignupComponent } from './body/signup/signup.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },{
    path:"signup",
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
