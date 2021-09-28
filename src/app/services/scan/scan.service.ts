import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sello } from '../../interfaces/Sello.interface';

@Injectable({
  providedIn: 'root'
})

export class ScanService {

  // data: Observable<any>;

  constructor(private http: HttpClient) {}

  
  // getHeader() {
  //   const headers = {
  //   headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', Accept: 'text/javascript'})
  //   };
  //   return headers;
  // }

  getSellos():Observable<string> {

    return this.http.get<string>('http://localhost:5000/sello?tag=10021046')
    // return this.http.get<Sello>('https://app.samtech.cl/sellos/obtenerSello?id=' + tagSello);
    }
}
