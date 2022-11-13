import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../sidenav/src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})


export class ApiService {


  baseUrl: string = environment.apiUrl;



  constructor(private http: HttpClient) { }

  getList(url: string): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }


  getById(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data,{responseType: 'text'});
  }

  update(data): Observable<any> {
    return this.http.put(`${this.baseUrl}`, data,{responseType: 'text'});
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,httpOptions);
  }
}
