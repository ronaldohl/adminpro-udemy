import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


const routes: Routes = [
  {
    path: '', 
    component: PagesComponent,
    children: [
      {path: 'graficas1', component: Graficas1Component},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  {path: 'register', component:RegisterComponent },
  {path: 'login', component: LoginComponent},
  {path: '**', component: NopagefoundComponent},
  // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
