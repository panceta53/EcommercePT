import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  public listarCategorias() {
    return this.http.get('//192.168.0.8:5000/categorias')
  }

}
