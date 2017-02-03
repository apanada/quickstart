import { USERS } from './mock-users';
import { User } from './User';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService{
    getUsers(): Promise<User[]>{
        return Promise.resolve(USERS);
    }    
}