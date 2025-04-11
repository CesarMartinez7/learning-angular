import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  inputs = [
    {nombre: "nombre", type: "text"},
    {nombre: "apellido", type: "text"},
    {nombre: "email", type: "email"},
    {nombre: "direccion", type: "text"}
  ]

  readonly form: FormGroup 

  constructor(fb: FormBuilder){
    this.form = fb.group({
      nombre: ["",[Validators.required]],
      apellido: "",
      email: "",
      direccion: ""
    
    })}

    mostrarDataForm(){
      console.log(this.form.value)
    }
}
