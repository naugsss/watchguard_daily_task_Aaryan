import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component {
  enteredText: string;
  @ViewChild('hello') hello: ElementRef;

  constructor(private dataService: DataService) {}

  onBtnClick() {
    // console.log(event.target.value);
    // console.log(event.target);
    // console.log(event.value);
    // console.log(typeof event);
    // this.enteredText = event.value;
    this.enteredText = this.hello.nativeElement.value;
    this.dataService.dataEmitter.next(this.enteredText);
  }
}
