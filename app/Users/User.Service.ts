import { Injectable } from "@angular/core"
import { Http, Response, Headers } from "@angular/http";
import { User } from "./User";
import { Observable } from "rxjs/Rx";

@Injectable()
export class UserService {
  private baseUrl: string = "http://localhost/DebtTrackerApi/api";

  constructor(private http: Http) { }

  getAll(): Observable<User[]> {
    let user$ = this.http
      .get(`${this.baseUrl}/users`, { headers: this.getHeaders() })
      .map(res => this.toUser(res.json()))
      .catch(this.handleError);

    return user$;
  }

  get(id: string): Observable<User> {
    let user$ = this.http
      .get(`${this.baseUrl}/users/${id}`, { headers: this.getHeaders() })
      .map(res => this.toUser(res.json()));

    return user$;
  }

  save(user: User): Observable<Response> {
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:
    return this.http
      .put(`${this.baseUrl}/users/${user.Id}`, JSON.stringify(user), { headers: this.getHeaders() });
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/jsonp');

    return headers;
  }

  toUser(r: any): any {
    let user = <User>({
      Id: r.Id,
      FirstName: r.FirstName,
      LastName: r.LastName,
      Username: r.UserName,
      Password: r.Password,
      Mobile: r.Mobile,
      isAdmin: r.isAdmin,
      isSalesman: r.isSalesman
    });

    return r;
  }

  private handleError(error: any) {
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`

    // throw an application level error
    return Observable.throw(errorMsg);
  }
}
