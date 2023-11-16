import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})

export class ParentComponentComponent {
  searchTextReceived(value) {
    console.log(value);
  }
  
  currentItem = 'Tomato';
  constructor(private appsrv: AppService) {}

  ngOnInit() {
    console.log('inside children');
    console.log(this.appsrv.getData());
  }
}
