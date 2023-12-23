import { Component } from '@angular/core';

@Component({
  template: '',
  standalone: true,
})
export class Persona {
  //creamos primero el modelo para persona

  /* sintaxis clasica
    nombre: String = "";
    apellido: String = "";

    constructor(nombre: string, apellido: String){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    */

  //sintaxis simplificada
  constructor(public nombre: String, public apellido: String) {}
}
