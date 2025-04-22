import { Routes } from "@angular/router";


export const OrderListRutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./order-list.component').then(od => od.OrderListComponent)
    }
]
