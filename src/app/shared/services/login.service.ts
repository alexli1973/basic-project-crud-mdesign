import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserModel} from '../model/user.model';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  getUserByEmail (email: string): Observable<any> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .map((user: UserModel[]) => user[0] ? user[0] : undefined);
  }

}
