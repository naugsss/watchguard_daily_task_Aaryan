import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {
  dataEmitter = new Subject<string>();

//   raiseData(data: string) {
//     this.dataEmitter.emit(data);
//   }
}
