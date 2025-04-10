import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ResponseJson } from '../../services/api.service';
import ButtonPress from '../../components/buttonPressed/button.component';
import { CommonModule } from '@angular/common';

interface Jsonify {
  id: number;
  nombre: string;
  precio: number;
  stock: boolean;
  descripcion: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, ButtonPress],
})
export class HomeComponent implements OnInit {
  jsonify: Jsonify[] = [
    {
      id: 1,
      nombre: 'Laptop',
      precio: 1500,
      stock: true,
      descripcion:
        'Computadora portátil de alto rendimiento, ideal para trabajo y entretenimiento.',
    },
    {
      id: 2,
      nombre: 'Mouse',
      precio: 30,
      stock: false,
      descripcion:
        'Dispositivo de entrada ergonómico para facilitar la navegación y precisión en el uso.',
    },
    {
      id: 3,
      nombre: 'Teclado',
      precio: 45,
      stock: false,
      descripcion:
        'Periférico esencial para escribir y controlar la computadora, disponible en versiones mecánicas y de membrana.',
    },
    {
      id: 4,
      nombre: 'Monitor',
      precio: 200,
      stock: true,
      descripcion:
        'Pantalla de alta resolución para mejorar la experiencia visual en el trabajo o gaming.',
    },
    {
      id: 5,
      nombre: 'Audífonos',
      precio: 80,
      stock: false,
      descripcion:
        'Accesorio de audio para escuchar música o jugar sin interrupciones externas.',
    },
    {
      id: 6,
      nombre: 'Silla Gamer',
      precio: 250,
      stock: false,
      descripcion:
        'Asiento ergonómico diseñado para largas sesiones de juego o trabajo en la PC.',
    },
    {
      id: 7,
      nombre: 'Disco SSD',
      precio: 120,
      stock: true,
      descripcion:
        'Unidad de almacenamiento rápido para mejorar el rendimiento del sistema y tiempos de carga.',
    },
    {
      id: 8,
      nombre: 'Memoria RAM',
      precio: 70,
      stock: false,
      descripcion:
        'Componente clave para la velocidad y rendimiento de la computadora.',
    },
    {
      id: 9,
      nombre: 'Webcam',
      precio: 55,
      stock: true,
      descripcion:
        'Cámara para videollamadas y transmisiones en vivo con buena calidad de imagen.',
    },
    {
      id: 10,
      nombre: 'Micrófono',
      precio: 110,
      stock: false,
      descripcion:
        'Dispositivo para grabar audio o realizar videoconferencias con claridad de sonido.',
    },
  ];

  name: string = 'Cesar';
  data: ResponseJson[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((response) => {
      this.data = response; // Guardamos la respuesta
      console.log(this.data); // Ver en consola
    });
  }
}
