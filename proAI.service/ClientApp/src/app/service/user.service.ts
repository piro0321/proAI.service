import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from  "src/app/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  public get():
    Promise <HttpResponse < any >> {
    return this.http.get('${environment.baseAddress}/api/user', {
      observe: 'response'
    }).toPromise();
    }
  }

