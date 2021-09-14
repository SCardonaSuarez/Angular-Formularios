import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre'      : new FormControl('RTX 45634'),
  //   'precio'      : new FormControl(1500),
  //   'existencias' : new FormControl(7),

  // })

  // 249, 250
  miFormulario  : FormGroup = this.fb.group({
    nombre      : [ , [Validators.required, Validators.minLength(3)]],
    precio      : [ , [Validators.required, Validators.min(0)]],
    existencias : [ , [Validators.required, Validators.min(0)]],

  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset({
      nombre: 'SMI',
      precio:1600,
      existencias: 3
    })
  }

  //251
  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset()

  }
}


/*

  ?249: Se creo el FromBuilder

  ?251: Se envia los campos con error de modo dinamico mandando un parametro ya que group es un OBJETO
      ?: Se agrega un *ngIf="campoEsValido('nombreElCampo ejemplo nombre, precio, cantidad, etc')"

*/
