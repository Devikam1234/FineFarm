import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FlowerComponent } from './pages/flower/flower.component';
import { FruitsComponent } from './pages/fruits/fruits.component';
import { HerbsComponent } from './pages/herbs/herbs.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';
import { SingleflowersComponent } from './pages/singleflowers/singleflowers.component';
import { SinglefruitComponent } from './pages/singlefruit/singlefruit.component';
import { SingleherbssComponent } from './pages/singleherbss/singleherbss.component';
import { vegetablesComponent } from './pages/vegetables/vegetables.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
  path:'categories',component:CategoriesComponent
  },
  {
  path:'signup',component:SignupComponent
  },
  {
  path:'login',component:LoginComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'vegetable',component:vegetablesComponent
  },
  {
    path:'fruit',component:FruitsComponent
  },
  {
    path:'flowers',component:FlowerComponent
  },
  {
    path:'herbs',component:HerbsComponent
  },
  {
    path:'single',component:SingleComponent
  },
  {
    path:'singlefruit',component:SinglefruitComponent
  },
  {
    path:'singleflowers',component:SingleflowersComponent
  },
  {
    path:'singleherbss',component:SingleherbssComponent
  },
  {
    path:'payment',component:PaymentComponent
  }
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
