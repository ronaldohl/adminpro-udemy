// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { Graficas1Component } from './pages/graficas1/graficas1.component';
// import { PagesComponent } from './pages/pages.component';


const APP_ROUTES: Routes = [
  //{-- Se movio al pages.routes.ts --}
  // {
  //   path: '', 
  //   component: PagesComponent,
  //   children: [
  //     {path: 'graficas1', component: Graficas1Component},
  //     {path: 'dashboard', component: DashboardComponent},
  //     {path: 'progress', component: ProgressComponent},
  //     {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  //   ]
  // },
  {path: 'register', component:RegisterComponent },
  {path: 'login', component: LoginComponent},
  {path: '**', component: NopagefoundComponent},
  // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  

];


export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES,{useHash:true});