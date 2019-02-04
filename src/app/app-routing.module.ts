import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../app/users/users.component';
import { PostsComponent } from '../app/posts/posts.component';
import { ComentsComponent } from '../app/coments/coments.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    pathMatch: 'full'
},
{
  path: 'coments',
  component: ComentsComponent,
  pathMatch: 'full'
},
{
  path: 'posts',
  component: PostsComponent,
  pathMatch: 'full'
},
{
  path: '**',
  component: UsersComponent,
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
