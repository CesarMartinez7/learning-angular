import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { PruebaService } from '../../services/root/prueba.service';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  form: FormGroup;

  carsServices = inject(PruebaService);

  constructor(fb: FormBuilder, private pruebaService: PruebaService) {
    this.form = fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required]],
      id: ['', [Validators.required]],
    });
  }

  handleSubmit() {
    this.getCars(this.form.value.id);
  }

  getCars(id: number) {
    const rs = this.pruebaService.getCar(id - 1);
    console.log(rs);
  }
}
