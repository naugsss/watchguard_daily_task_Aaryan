import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {
  transform(userString: any, changeChar: any) {
    if (userString === '' || changeChar === '') return;
    // for (let char in userString) {
    //   if (userString[char] === 'a') {
    //     userString[char] = 'z';
    //   }
    // }
    return userString.replaceAll(changeChar, 'z');
  }
}
