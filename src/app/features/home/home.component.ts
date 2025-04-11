import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ResponseJson } from '../../services/api.service';
import ButtonPress from '../../components/buttonPressed/button.component';
import { CommonModule } from '@angular/common';
import { Signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import Book from '../../types/bookresponse';
import NoRegistrer from '../../components/noregistrer/noregistrer.component';



@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule,NoRegistrer],
})
export class HomeComponent {

  contador = signal(0);
  onClickAumented() {
    this.contador.set(this.contador() + 1);
  }
  bookGet = httpResource<Book>(
    () => ({
      url: 'https://openlibrary.org/search.json?q=odisea',
      method: 'GET',
    }),
    { defaultValue: undefined }
  );

  constructor() {
    console.log(this.bookGet);
  }
}
