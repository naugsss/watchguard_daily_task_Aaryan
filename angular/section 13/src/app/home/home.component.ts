import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, of } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  // ngOnInit(): void {
  //   this.obs.subscribe({
  //     next(x) {
  //       console.log('received value : ' + x);
  //     },
  //     error(err) {
  //       console.log(err.message);
  //     },
  //     complete() {
  //       console.log('Completed emitting observable');
  //     },
  //   });
  // }
  constructor() {}

  ngOnInit(): void {
    const obs = new Observable((observer) => {
      // console.log('observer starts');
      observer.next(6);
      observer.next(2);
      observer.next(3);
      // observer.error('error occured');
      observer.complete();
      observer.next(4);
    });
    const pipedObservable = obs.filter((data: number) => {
      return data % 2 == 0;
    });

    // const pipedObservable = obs.pipe(
    //   filter((data: number) => {
    //     return data % 2 == 0;
    //   })
    // );

    this.firstObsSubscription = pipedObservable.subscribe({
      next: (value) => {
        setTimeout(() => {
          console.log(value);
        }, 4000);
      },
      error: (err) => console.log(err),
      // complete: () => console.log('event completed'),
    });
  }

  ngOnDestroy(): void {
    // console.log('Unsubscribing');
    this.firstObsSubscription.unsubscribe();
  }
}
