import { Component, OnInit, OnDestroy } from '@angular/core';
import { Comments } from '../shared/models/models';
import { Subscription } from 'rxjs';
import { HttpService } from '../shared/http-services/http-services.services';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit, OnDestroy {

  protected comments: Array<Comments> = [];
  private subscription: Subscription;
  constructor(private readonly _http: HttpService) { }

  ngOnInit() {
    this.getcomments();
  }

  getcomments(): void {
    this.subscription = this._http.getComments().subscribe(
      (data: Comments[]) => {
        this.comments = [...data];
      }
    );
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
