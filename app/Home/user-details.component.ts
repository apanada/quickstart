import { User } from './User';
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "user-details",
    templateUrl: "user-details.component.html"
})

export class UserDetailsComponent{
    @Input() user: User;
}