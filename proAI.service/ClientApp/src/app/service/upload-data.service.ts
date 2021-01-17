import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { UploadData } from 'src/app/models/uploadData';

@Injectable({
  providedIn: 'root'
})
export class UploadDataService {

  constructor( private http: HttpClient) { }

  public post(uploadData: UploadData):
    Promise<HttpResponse<any>>{
    return this.http.post('${environment.baseAddress}/api/uploadData', uploadData,{
        observe: 'response'
    }).toPromise();
    }

    public get():
    Promise<HttpResponse<any>>{
    return this.http.get('${environment.baseAddress}/api/uploadData', {
        observe: 'response'
    }).toPromise();
    }
 
}