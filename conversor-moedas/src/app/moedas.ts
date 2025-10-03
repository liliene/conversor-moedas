import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoedasService {

  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/';

  constructor(private http: HttpClient) { }

  getTaxas(moedaBase: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${moedaBase}`);
  }
}