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

  jsonify: any = [
    { "id": 1, "nombre": "Laptop", "precio": 1500, "stock": 10 },
    { "id": 2, "nombre": "Mouse", "precio": 30, "stock": 50 },
    { "id": 3, "nombre": "Teclado", "precio": 45, "stock": 30 },
    { "id": 4, "nombre": "Monitor", "precio": 200, "stock": 15 },
    { "id": 5, "nombre": "Audífonos", "precio": 80, "stock": 25 },
    { "id": 6, "nombre": "Silla Gamer", "precio": 250, "stock": 5 },
    { "id": 7, "nombre": "Disco SSD", "precio": 120, "stock": 40 },
    { "id": 8, "nombre": "Memoria RAM", "precio": 70, "stock": 20 },
    { "id": 9, "nombre": "Webcam", "precio": 55, "stock": 12 },
    { "id": 10, "nombre": "Micrófono", "precio": 110, "stock": 18 }
  ]
  

  name : string = "Cesar"
  data: ResponseJson[] = [];  // Almacena la respuesta de la API

  constructor(private apiService: ApiService) {}  // 👈 Inyecta el servicio

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(response => {
      this.data = response; // Guardamos la respuesta
      console.log(this.data); // Ver en consola
    });
  }
}


