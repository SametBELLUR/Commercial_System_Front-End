import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    console.log('1');
    filterText =
      filterText && filterText.length > 2 ? filterText.toLocaleLowerCase() : '';
    console.log('2' + filterText);
    return filterText
      ? value.filter(
          (p: Product) =>
            p.productName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
//filter
