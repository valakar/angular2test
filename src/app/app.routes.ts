import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/modules/home/home.module#HomeModule'
            }
        ]
    }
];
