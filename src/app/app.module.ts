import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { Graficas1Component } from './pages/graficas1/graficas1.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
// import { PagesComponent } from './pages/pages.component';
// import { sharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
    // {--lOS MOVIMOS AL PAGES.MODULE.TS--}
    // DashboardComponent,
    // ProgressComponent,
    // Graficas1Component,
    // PagesComponent,
    
    //{-- Se movieron a sharedModule.module.ts --}
    // NopagefoundComponent,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
