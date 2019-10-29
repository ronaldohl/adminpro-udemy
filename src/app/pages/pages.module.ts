import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PagesRoutes } from './pages.routes';
//ng2-charts
 import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// GraficoDonaComponent
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
    declarations: [
         DashboardComponent,
         ProgressComponent,
         Graficas1Component,
         PagesComponent,
         IncrementadorComponent,
         GraficoDonaComponent,
         AccountSettingsComponent,
         PromesasComponent,
         RxjsComponent
    ],
    imports: [ 
        SharedModule,
        PagesRoutes,
        FormsModule,
         ChartsModule

    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    providers: [],
})
export class PagesModule {}