import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  initForm = {
    producto: 'smi',
    precio: 100,
    existencia: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  //?Mostar error de requisitos

  nombreValido():boolean{
    return this.miFormulario?.controls.producto?.invalid
  }

  precioValido():boolean{
    return this.miFormulario?.controls.precio?.value < 0
  }

  /* Guarda el valor en un objeto */
  // guardar(miFormulario:NgForm){
  //   console.log(miFormulario);
  // }
  guardar(){
    // console.log(this.miFormulario);
    console.log('Posteo Correcto');
    this.miFormulario.resetForm({
      producto:'item',
      precio: 0,
      existencias: 0,

    })

  }

}
