import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cureency'
})
export class CureencyPipe implements PipeTransform {

  transform(val: string) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(Number(val));
   
  }

}
