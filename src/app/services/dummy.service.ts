import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  private BASE_URL = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getDummyData(limit: number = 10) {
    return this.http.get<any[]>(`${this.BASE_URL}?results=${limit}`);
  }

  getUserDetails(userId: string) {
    return this.http.get<any>(`${this.BASE_URL}?id=${userId}`);
  }
}
