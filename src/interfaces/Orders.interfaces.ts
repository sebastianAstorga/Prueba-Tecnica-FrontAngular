export interface Producto {
    nombre: string;
    cantidad: number;
  }
  
  export interface OrdenCompra {
    cliente?: string;
    productos?: Producto[];
    fecha?: string; // también puede usarse Date si lo prefieres
  }