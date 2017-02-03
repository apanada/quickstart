import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from "./User";

@Component({
    moduleId: module.id,
    selector: "home",
    templateUrl: "home.component.html",
    providers: [UserService]
})
export class HomeComponent implements OnInit {
    private name: string;
    private title: string;
    private users: Array<User>;
    private selectedUser: User;

    constructor(private userService: UserService) { }

    getUsers(): void {
        this.userService.getUsers().then(users => this.users = users);
    }
    onSelect(user: User): void {
        this.selectedUser = user;
    }
    ngOnInit(): any {
        this.name = "Ajit Panada";
        this.title = "List of Users";
        this.getUsers();
    }
}