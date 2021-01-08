import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IPost } from '../models/post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  /*@Input()*/ posts: IPost[] = [];
  postsSub: Subscription;

  constructor(private _postService: PostsService) {}

  ngOnInit(): void {
    this._postService.getPosts();
    this.postsSub = this._postService
      .getPostUpdateListener()
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  onDelete(postId: string) {
    this._postService.deletePost(postId);
  }
}
/*
  posts = [
    {
      title: 'first',
      content: 'first one content',
    },
    {
      title: 'sec',
      content: 'sec one content',
    },
    {
      title: 'thrd',
      content: 'thrd one content',
    },
  ];
*/
