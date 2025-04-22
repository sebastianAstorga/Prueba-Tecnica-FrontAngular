import { Routes } from "@angular/router";


export const OrderCreateRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('../order-create/order-create.component').then(or => or.OrderCreateComponent)
    }
]
