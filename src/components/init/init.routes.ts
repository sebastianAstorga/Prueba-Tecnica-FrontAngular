import { Routes } from "@angular/router";

export const initRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./init.component').then(c => c.InitComponent),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list'
            },
            {
                path:'list',
                loadChildren: () => import('../routes').then(ol => ol.OrderListRutes)
            },
            {
                path: 'list/details',
                loadChildren: () => import('../routes').then(od => od.OrderDetailRutes)
            },
            {
                path: 'create',
                loadChildren: () => import('../routes').then(oc => oc.OrderCreateRoutes)
            }
            
        ]
    }
]