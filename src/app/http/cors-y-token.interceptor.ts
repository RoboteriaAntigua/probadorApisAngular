import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class corsYTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

    console.log('aqui estamos interceptando todo');
    let token:string|null='';

    token = localStorage.getItem('token_marcos');
    
    const requestToken = request.clone({
      setHeaders:{ authorization: `Bearer ${token}`}
    });

    return next.handle(requestToken);
  }
}