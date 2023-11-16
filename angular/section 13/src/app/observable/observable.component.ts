import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
// import { filter } from 'rxjs-compat/operator/filter';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
})
export class ObservableComponent implements OnInit {
  ngOnInit(): void {
    const source = of(6, 8, 9, 5);

    const modified = source.pipe(
      filter((value) => value > 5),
      map((value) => value * 2)
    );
    console.log(modified)

    modified.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('event emitted');
      },
    });
  }
}
