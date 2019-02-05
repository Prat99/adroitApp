import { Component, OnInit, OnDestroy } from '@angular/core';
import { Posts } from '../shared/models/models';
import { Subscription } from 'rxjs';
import { HttpService } from '../shared/http-services/http-services.services';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  protected posts: Array<Posts> = [];
  private subscription: Subscription;
  constructor(private readonly _http: HttpService) { }

  ngOnInit() {
    this.getposts();
  }

  getposts(): void {
    this.subscription = this._http.getPosts().subscribe(
      (data: Posts[]) => {
        this.posts = [...data];
      }
    );
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
