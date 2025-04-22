import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'init',
        loadChildren: (() => import('../components').then(i => i.initRoutes))

    },
    {
        path: '',
        redirectTo:'init',
        pathMatch: "full"
    },
    {
        path:'**',
        redirectTo: 'init',
        pathMatch: 'full'
    }
];
