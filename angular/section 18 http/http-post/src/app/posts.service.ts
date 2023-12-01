import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createAndStorePosts(title: string, content: string) {
    const postData: PostModel = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-65c5a-default-rtdb.firebaseio.com/posts.json',
        postData,
        { observe: 'response' }
      )
      .subscribe((responseData) => {
        next: () => console.log(responseData);
        error: (err) => this.error.next(err.message);
      });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: PostModel }>(
        'https://ng-complete-guide-65c5a-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          // params: new HttpParams().set('print', 'pretty'),
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: PostModel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }

          return postsArray;
        }),
        catchError((error) => {
          throw new Error(error);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(
        'https://ng-complete-guide-65c5a-default-rtdb.firebaseio.com/posts.json',
        {
          observe: 'events',
          responseType: 'json',
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // console.log(event.body)
            // ... here we can like Update the ui or send some custom message
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
