import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent {
  @Output() searchText = new EventEmitter<string>();
  searchText2: string = '';
  @ViewChild('anotherLocalRef') localRef: ElementRef;

  onButtonPressed() {
    this.searchText.emit('hii there');
  }

  @Input() item;
  onBtnClick(localRef: HTMLInputElement) {
    console.log(localRef);
    console.log(localRef.value);
  }

  onBtnClick2() {
    this.searchText2 = this.localRef.nativeElement.value;
    console.log(this.searchText2);
  }
}
