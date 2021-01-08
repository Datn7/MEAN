import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  {
    path: 'create',
    component: PostCreateComponent,
  },
  {
    path: 'edit/:postId',
    component: PostCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
