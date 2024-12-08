import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './home/cart/cart.component';
import { DishComponent } from './home/dish/dish.component';
import { OrdersComponent } from './home/orders/orders.component';
import { HeaderComponent } from './header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { IngSearchPipe } from './pipes/ing-search.pipe';
import { ConfirmDirective } from './directives/confirm.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component: HomeComponent, children:[
    {path:'cart', component: CartComponent},
    {path:'orders', component: OrdersComponent}
  ]},
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    DishComponent,
    OrdersComponent,
    HeaderComponent,
    HighlightDirective,
    IngSearchPipe,
    ConfirmDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
