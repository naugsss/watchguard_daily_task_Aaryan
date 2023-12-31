import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: string) {
    value.sort((a, b) => {
      if (a[propName] < b[propName]) return -1;
      else if (a[propName] > b[propName]) return 1;
      else return 0;
    });
  }
}
