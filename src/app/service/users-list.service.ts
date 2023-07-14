import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersListService {
  constructor(private http: HttpClient) {}

  getUserData() {
    // let apiUrl = 'https://jsonplaceholder.typicode.com/users';
    let apiUrl = 'http://localhost:5000/PropertyList/getPropertyList';
    return this.http.get(apiUrl);
  }
}
