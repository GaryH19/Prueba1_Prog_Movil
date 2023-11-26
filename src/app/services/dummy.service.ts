import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

private BASE_URL = 'https://dummyjson.com/users'

  constructor(

    private http: HttpClient  //injeccion de dependencias

  ) { }

  getDummyData(limit: number = 10) {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get(this.BASE_URL, {params});
  }
}
