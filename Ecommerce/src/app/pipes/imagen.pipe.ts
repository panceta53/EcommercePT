import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, prodId: string): any {
    return `http://192.168.0.8:5000/producto/${prodId}/${img}`;
  }

}
