import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServices } from '../../../services/ApiServices';
import { OrdenCompra } from '../../../interfaces/Orders.interfaces';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  imports: [DatePipe],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent implements OnInit{
  constructor(private router: ActivatedRoute){
  }
  private service = inject(ApiServices);
  

  @Input() isDark = false;
  orden: OrdenCompra = {  }; // Simulación de datos
  ngOnInit() {
    this.service.orden$.subscribe(data => {
      console.log(data)
      this.orden = data;
    })
  }
}
