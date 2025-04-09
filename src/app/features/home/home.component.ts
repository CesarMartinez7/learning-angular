import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ResponseJson } from '../../services/api.service';
import ButtonPress from "../../components/buttonPressed/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl:"./home.component.html",
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  name : string = "jdsfj"
  data: ResponseJson[] = [];  // Almacena la respuesta de la API

  constructor(private apiService: ApiService) {}  // 👈 Inyecta el servicio

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(response => {
      this.data = response; // Guardamos la respuesta
      console.log(this.data); // Ver en consola
    });
  }
}
