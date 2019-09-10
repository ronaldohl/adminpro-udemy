import { Routes, RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



const routes: Routes = [

    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'graficas1', component: Graficas1Component },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'account-settings', component: AccountSettingsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
];


export const PagesRoutes = RouterModule.forChild(routes);
