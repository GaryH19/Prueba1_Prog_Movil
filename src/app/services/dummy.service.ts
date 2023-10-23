import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

private BASE_URL = 'https://dummyjson.com/users'

  constructor(

    private http: HttpClient  //injeccion de dependencias

  ) { }

  getDummyData() {
    return this.http.get(this.BASE_URL);
  }
}
