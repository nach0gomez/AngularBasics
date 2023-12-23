import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../personas.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {

  // crear variable para tener informacion de tipo persona a nuestro componente padre
  //propagar la informacion hacia le comp padre
  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: String = '';
  apellidoInput: String = '';
  agregarPersonaForm(): void {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //obteniendo la informacion nueva, la agregamos al array
    //this.personas.push(persona1);    ya no tenemos acceso directamente al array personas
    //por lo que la emitimos la persona capturada y la recibimos en el padre

    this.personaCreada.emit(persona1);
    //console.log('test');
  }
}
