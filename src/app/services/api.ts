import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:44320/api/transactions';

  constructor(private http: HttpClient) {}

  submitTransaction(transaction: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, transaction);
  }

  getPositions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/positions`);
  }
}