import { Component, Input, OnDestroy, OnInit, inject} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OrdenCompra } from '../../../interfaces/Orders.interfaces';
import { ApiServices } from '../../../services/ApiServices';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-list',
  imports: [FormsModule,DatePipe],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit , OnDestroy{

  private readonly router = inject(Router);
  private sus !: Subscription;
  services = inject(ApiServices);
  ordenes: OrdenCompra[] = [];
  sinInfo: boolean = true;

  ngOnInit(){
     this.refreshData();
  }

  ngOnDestroy() {
   this.sus.unsubscribe();
  }

  refreshData(){
    this.sus = this.services.getOrders().subscribe( resp => {
      this.ordenes = resp;
      console.log(this.ordenes)
      this.sinInfo = this.ordenes.length === 0 ? true : false;
    }, error => {
      console.error("Error al obtener las ordenes: " , error);
      this.sinInfo = true;
    });
  }
  

  orderDetail(data: any){
    debugger;
    console.log('logs',{data})
    this.services.setOrden(data);
    this.router.navigateByUrl("init/list/details");
  }

}
