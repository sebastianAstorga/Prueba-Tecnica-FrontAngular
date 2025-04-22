import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrdenCompra } from '../../../interfaces/Orders.interfaces';
import { ApiServices } from '../../../services/ApiServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './order-create.component.html',
  styleUrl: './order-create.component.css'
})
export class OrderCreateComponent {

  services = inject(ApiServices);
  route = inject(Router)
  isDark = false;

  ordenForm = new FormGroup({
    cliente: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    productos: new FormArray([this.crearProducto()]),
    fecha: new FormControl('', Validators.required)
  });

  
  crearOrden(): void {
    debugger;
    if (this.ordenForm.valid) {
      const orden: OrdenCompra = {
        cliente: this.ordenForm.value.cliente ?? '',
        fecha: this.ordenForm.value.fecha ?? '',
        productos: this.ordenForm.value.productos ?? []
      };

      
      

      this.services.postSaveOrder(orden).subscribe(() => {
        debugger;
        alert('Creado correctamente');
        this.limpiarFormulario();
        this.route.navigate(['init/list']);
      });
    } else {
      alert('Por favor complete todos los campos correctamente');
    }
  }

  crearProducto(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', Validators.required),
      cantidad: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(1000)])
    });
  }

  get productos(): FormArray {
    return this.ordenForm.get('productos') as FormArray;
  }

  agregarProducto(): void {
    this.productos.push(this.crearProducto());
  }

  eliminarProducto(index: number): void {
    this.productos.removeAt(index);
  }


  limpiarFormulario(): void {
    this.ordenForm.reset();
    this.ordenForm.reset();
    this.productos.clear();
    this.agregarProducto(); // restaurar valor por defecto
  }

  

}
