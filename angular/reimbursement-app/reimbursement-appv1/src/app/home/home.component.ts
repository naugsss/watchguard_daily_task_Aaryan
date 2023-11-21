import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Output() reimbursementdata = new EventEmitter<NgForm>();
  @ViewChild('form') form: NgForm;
  reimbursementref: ElementRef;

  inputData = [];

  constructor(private renderer: Renderer2) {}

  onSubmit() {
    // console.log(this.form);
  }

  onSave() {
    this.reimbursementdata.emit(this.form);
  }

  onAdd() {
    console.log(this.form);
    this.inputData.push('');
  }
}
