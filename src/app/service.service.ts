import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this
            .http
              .get("http://localhost:4000/")
            .pipe(
              map(res => res)
    );
  }
}
