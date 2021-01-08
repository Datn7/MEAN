import { Injectable } from '@angular/core';
import { IPost } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: IPost[] = [];
  postsUpdated = new Subject<IPost[]>();

  constructor() {}

  getPosts() {
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: IPost = {
      title: title,
      content: content,
    };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}
