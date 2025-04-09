import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ResponseJson {
  userId: number
  id: number
  title: string
  body: string
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "https://jsonplaceholder.typicode.com/todos/1"

  constructor(private http : HttpClient) { }

  getUsers(): Observable<ResponseJson[]> {
    return this.http.get<ResponseJson[]>(this.apiUrl)
  }
}
