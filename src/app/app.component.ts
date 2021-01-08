import { Component } from '@angular/core';
import { IPost } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MEAN';
  postsAPP: IPost[] = [];

  onPostAdded(post) {
    this.postsAPP.push(post);
  }
}
