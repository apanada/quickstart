import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from './User.Service';

@Component({
  moduleId: module.id,
  selector: 'user-list',
  template: `
  <section>
    <section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
    </section>
      <ul>
        <!-- this is the new syntax for ng-repeat -->
        <li *ngFor="let user of users">
          {{user.FirstName}} {{user.LastName}} {{user.UserName}}
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  `
})

export class UserListComponent implements OnInit {
  users: User[] = [];
  user: User = <User>({});
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
      .getAll()
      .subscribe(
         /* happy path */ u => this.users = u,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);
  }
}
