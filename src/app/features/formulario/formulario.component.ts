import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  readonly form: FormGroup 

  constructor(fb: FormBuilder){
    this.form = fb.group({
      nombre: "",
      apelliddo: "",
      email: "",
      direccion: ""
    
    })}

    mostrarDataForm(){
      console.log(this.form.value)
    }
}
