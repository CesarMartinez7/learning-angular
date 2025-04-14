import { Injectable } from '@angular/core';


interface Car {
  id: number
  name: string
}


@Injectable({
  providedIn: 'root',
})
export class PruebaService {
  
  cars = [
    { id: 1, name: 'Sunflower GT' },
    { id: 2, name: 'Flexus Sport' },
    { id: 3, name: 'Sprout Mach One' },
    { id: 4, name: 'Sunflower GT' },
    { id: 5, name: 'Flexus Sport' },
    { id: 6, name: 'Sprout Mach One' },
    { id: 7, name: 'Sunflower GT' },
    { id: 8, name: 'Flexus Sport' },
    { id: 9, name: 'Sprout Mach One' },
    { id: 10, name: 'Sunflower GT' },
    { id: 11, name: 'Flexus Sport' },
    { id: 12, name: 'Sprout Mach One' },
    { id: 13, name: 'Sunflower GT' },
    { id: 14, name: 'Flexus Sport' },
    { id: 15, name: 'Sprout Mach One' },
    { id: 16, name: 'Sunflower GT' },
    { id: 17, name: 'Flexus Sport' },
    { id: 18, name: 'Sprout Mach One' },
    { id: 19, name: 'Sunflower GT' },
    { id: 20, name: 'Flexus Sport' },
  ];


  getCars(): Array<Car> {
    return this.cars
  }

  getCar(id: number): Car {
    return this.cars[id];
  }
}
