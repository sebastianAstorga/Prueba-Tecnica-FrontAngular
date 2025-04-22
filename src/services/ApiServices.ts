import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { OrdenCompra } from "../interfaces/Orders.interfaces";
import { BehaviorSubject, Observable } from "rxjs";

const url: string = 'https://localhost:44371/api/order' 

@Injectable({
    providedIn: 'root'
})

export class ApiServices{
    private ordenSeleccionada = new BehaviorSubject<any>(null);
    orden$ = this.ordenSeleccionada.asObservable();
    private http :HttpClient = inject(HttpClient);

    public getOrders(): Observable<OrdenCompra[]> {
        return this.http.get<OrdenCompra[]>(url + '/Listar');
    }

    public postSaveOrder(order: OrdenCompra):Observable<any>{
        return this.http.post(url + '/SaveOrder', order);
    } 

    setOrden(orden: any) {
        this.ordenSeleccionada.next(orden);
      }
}