import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iuser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

 

  constructor(private http:HttpClient) { }

  pruebaInicial():Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/pruebaInicial');
  }

  register(user:iuser ):Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register',user);
  }

  login(user:iuser):Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/login',user)
  }

  rutaProtejida():Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/home');
  }

  logout():Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/logout');
  }
}
