import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '',redirectTo: 'login', pathMatch: 'full'} ,
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductComponent}, 
  { path: 'product-details/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }