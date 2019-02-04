import { Component, OnInit, OnDestroy } from '@angular/core';
import { Users, Address } from '../shared/models/models';
import { Subscription } from 'rxjs';
import { HttpService } from '../shared/http-services/http-services.services';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  protected users: Array<Users> = [];
  private subscription: Subscription;
  constructor(private readonly _http: HttpService) { }
  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.subscription = this._http.getUsers().subscribe(
      (data: Users[]) => {
        console.log('users response', data);
        this.users = [...data];
      }
    );
  }

  serializeAddress(address): string {
    return `${address.street},
    ${address.suite},
    ${address.city},
    ${address.zipcode},
    ${address.geo.lat},
    ${address.geo.lng}`;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
