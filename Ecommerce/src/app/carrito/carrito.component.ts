import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { VentaService } from '../servicios/venta.service';
import { CompraService } from '../servicios/compra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  datos:any = []
  constructor(
    private productoserv: ProductosService, 
    private venteserv: VentaService,
    private compraserv: CompraService,
    private router: Router
  ) { 
    this.datos = this.productoserv.verProductosCarro()
  }

  total : number
  cantidad : number
  ngOnInit() {
  }

  mas(id:number){
    this.datos.forEach(element =>{
      if(element.id == id) {
        element.cantidad += 1
      }
    })
  }

  menos(id:number){

    this.datos.forEach(element =>{
      if(element.id == id) {
        if(element.cantidad <= 1){
          element.cantidad = 1
        }
        else{
          element.cantidad -= 1
        }
      }
    })
    
  }

  public Eliminar(id:number) {
    const prod = this.datos
    this.datos.forEach(function(element){
      if(id == element.id){
          let pos = prod.indexOf(element);
          const productod = prod.splice(pos, 1);
      }
    });
  }

  public valorTotal() {
    let numero: number = 0
    this.datos.forEach(function(element){
      numero = (element.cantidad * element.precio) + numero
    });

    return numero
  }

  private PromesaRegistrarVenta(datos:any){
    return new Promise((resolve,reject)=>{
      this.venteserv.registrarVenta(datos).subscribe((result:any)=>{
        resolve({
          result,resultado:'ok'
        })
      },(error:object)=>{
        reject({
          error,resultado:'error'
        })
      });
    })
  }

  private PromesaRegistrarCompra(datos:any){
    return new Promise((resolve,reject)=>{
      this.compraserv.registrarCompra(datos).subscribe((result:any)=>{
        resolve({
          result,resultado:'ok'
        })
      },(error:object)=>{
        reject({
          error,resultado:'error'
        })
      });
    })
  }

  public async comprar() {
    let venta: any = {
      total_venta: this.valorTotal()
    }
    let result: any = null
    try {
      result = await this.PromesaRegistrarVenta(venta)
      result = result.result
      result = result.resultado
      result = result.respuesta
      this.comprarProductos(result.insertId)
      this.datos = this.productoserv.eliminarProductosCarro()
    } catch (error) {
      console.log(error)
    }
  }

  private async comprarProductos(idVenta: number) {
    let producto: any
    let result: any = null
    this.datos.forEach(async element => {
      producto = {
        producto_id: element.id,
        cantidad_producto: element.cantidad,
        total_compra: element.precio*element.cantidad,
        id_venta: idVenta
      }
      try {
        result = await this.PromesaRegistrarCompra(producto)
        console.log(result)
      } catch (error) {
        result = error
      }
    });
    alert("Comprar realizada con exito")
    this.router.navigate([''])
  }

}
