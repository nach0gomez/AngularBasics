import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Persona } from '../personas.model';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [NgFor],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  nombre: String = 'Juan';
  apellido: String = 'Perez';
  edad: Number = 30;


  //variables para el propery binding entre componentes
  //si quisiera no inicializarla, ya que no es necesario, se cambia el ts.config.json
  @Input() persona: Persona = new Persona('test', 'test');
  @Input() i: number = 0;

  
}
