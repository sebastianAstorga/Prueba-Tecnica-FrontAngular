import { Routes } from "@angular/router";


export const OrderDetailRutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./order-detail.component').then(od => od.OrderDetailComponent)
    }
]
