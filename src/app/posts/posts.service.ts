import { Injectable } from '@angular/core';
import { IPost } from '../models/post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: IPost[] = [];
  postsUpdated = new Subject<IPost[]>();

  constructor(private _http: HttpClient) {}

  getPosts() {
    this._http
      .get<{ message: string; posts: IPost[] }>(
        'http://localhost:3000/api/posts'
      )
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  addPost(title: string, content: string) {
    const post: IPost = {
      id: null,
      title: title,
      content: content,
    };

    this._http
      .post<{ message: string }>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}
