import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: any): any {
    let words = value.split('');
    words.reverse();
    words = words.join('');
    return words;
  }
}
