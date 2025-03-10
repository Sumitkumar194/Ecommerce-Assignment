import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor() {}
  http = inject(HttpClient);
  private apiURl = 'https://fakestoreapi.com/products';
  getproduct(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURl);
  }
}
