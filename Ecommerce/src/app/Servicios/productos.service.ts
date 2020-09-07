import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:any = [];
  constructor(private http: HttpClient) { }

  public verProductos() {
    return this.http.get('//192.168.0.8:5000/obtenerproducto')
  }

  public agregarProducto(datos: any) {
    let producto: any = {
      id: datos.id,
      imagen: datos.imagen,
      nombre: datos.nombre,
      descripcion: datos.descripcion,
      precio: datos.precio,
      categoria: datos.categoria,
      cantidad: datos.cantidad
    }
    if(this.productos.length == 0){
      this.productos.push(producto)
    }else{
      this.productos.forEach(element => {
        if(element.id = producto.id){
          element.cantidad += producto.cantidad
        }else {
          this.productos.push(producto)
        }
      });
    }
  }

  public verProductosCarro() {
    return this.productos
  }

  public eliminarProductosCarro()
  {
    return this.productos = []
  }

}
