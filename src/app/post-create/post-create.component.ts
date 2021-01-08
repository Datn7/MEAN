import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPost } from '../models/post.model';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  //@Output() postCreated = new EventEmitter<IPost>();

  constructor(private _postService: PostsService) {}

  ngOnInit(): void {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const post: IPost = {
      title: form.value.title,
      content: form.value.content,
    };
    //this.postCreated.emit(post);
    this._postService.addPost(form.value.title, form.value.content);
    form.resetForm();
    console.log(post);
  }
}
