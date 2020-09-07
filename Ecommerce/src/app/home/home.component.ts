import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { CategoriasService } from '../servicios/categorias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listar: any = [];
  categorias: any = [];
  valorCategoria: any = "";
  filtro: any = [];

  constructor(private productosserv: ProductosService, private categoriaserv: CategoriasService) { 
    this.listarProductos()
    this.listarCategorias()
  }

  ngOnInit() {
  }

  private PromesalistarProductos(){
    return new Promise((resolve,reject)=>{
      this.productosserv.verProductos().subscribe((result:any)=>{
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

  async listarProductos() {
    let result: any = null;
    let producto: any;
    try {
      result = await this.PromesalistarProductos()
      result = result.result
      result = result.res
      result.forEach(element => {
        producto = {
          id: element.id_producto,
          imagen: element.imagen,
          nombre: element.nombre,
          descripcion: element.descripcion,
          precio: element.precio,
          categoria: element.categoria_id,
          cantidad: 1
        }
        this.listar.push(producto)
      });
    } catch (error) {
      console.log(error)
    }
       
  }

  private promesalistarCategorias() {
    return new Promise((resolve,reject)=>{
      this.categoriaserv.listarCategorias().subscribe((result:any)=>{
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

  async listarCategorias() {
    let result: any = null
    try {
      result = await this.promesalistarCategorias()
      result = result.result
      result = result.resultado
      this.categorias = result
    } catch (error) {
      console.log(error)
    }
  }

  mas(id: number) {
    this.listar.forEach(element => {
      if (element.id = id) {
        element.cantidad += 1
      }
    });
  }

  menos(id: number) {
    this.listar.forEach(element => {
      if (element.id = id) {
        if (element.cantidad <= 1) {
          element.cantidad = 1
        }else {
          element.cantidad -= 1
        }
      }
    });
  }

  filtrar() {
    this.filtro = []


    this.listar.forEach(element => {
      if(element.categoria == this.valorCategoria){
        this.filtro.push(element)
      }
    });
  }

  agregarProducto(id: number) {
    let producto: any
    let respuesta: any
    this.listar.forEach(element => {
      if(element.id = id){
        producto = element
      }
    });
    this.productosserv.agregarProducto(producto)
    alert("Producto agregado al carrito")
  }
}


