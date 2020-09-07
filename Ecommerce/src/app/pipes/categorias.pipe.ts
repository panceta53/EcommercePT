import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorias'
})
export class CategoriasPipe implements PipeTransform {

  transform(filtro: any[], catego: any): any[] {

    if(catego == ""){
      return filtro
    }

    return filtro.filter( items => {
      return items.categoria == catego
    })
  }

}
