import { Component, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import Book from '../../types/bookresponse';


@Component({
  selector: 'app-fetching',
  imports: [],
  templateUrl: './fetching.component.html',
  styleUrl: './fetching.component.css'
})
export class FetchingComponent {
  query: string = "dragon"
  private readonly url: string = `https://openlibrary.org/search.json?q=${this.query}`
 bookGET = httpResource<Book>(() => ({
  url: this.url,
  method: "GET"
 }))

 
}


