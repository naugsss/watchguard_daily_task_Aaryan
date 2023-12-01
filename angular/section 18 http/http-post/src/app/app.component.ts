import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { PostModel } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: PostModel[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });

    this.isFetching = true;
    this.postService.fetchPosts().subscribe({
      next: (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error: (error) => {
        this.isFetching = false;

        this.error = error.message;
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onHandleError() {
    this.error = null;
  }

  onCreatePost(postData: PostModel) {
    // Send Http request
    this.postService.createAndStorePosts(postData.title, postData.content);
    this.isFetching = true;
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe({
      next: (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error: (error) => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      },
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe((response) => {
      this.loadedPosts = [];
    });
  }
}
