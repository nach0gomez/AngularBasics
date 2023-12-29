import { Component, ElementRef, ViewChild } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Persona } from '../personas.model';
import { FormularioComponent } from '../formulario/formulario.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  //styles: [` h1{ color: blue;  }`],
  standalone: true,
  imports: [
    PersonaComponent,
    FormularioComponent,
    CalculadoraComponent,
    FormsModule,
    Persona,
    NgIf,
    NgFor,
  ],
})
export class PersonasComponent {
  deshabilitar = false;

  titulo = 'ingeniero';

  //variables para calculadora
  opA: number = 0;
  opB: number = 0;
  result: number = 0;

  operar(): void {
    this.result = Number(this.opA) + Number(this.opB);
  }

  //-----------------------

  mensaje = 'No se ha agregado ninguna persona';
  agregarPersona() {
    this.mensaje = 'Persona agregada';
  }

  modificarTitulo(event: Event) {
    //se castea y luego se extrae el valor
    this.titulo = (<HTMLInputElement>event.target).value;
  }

  //variables para directivas estructurales
  //ngIf
  ngifMessage: string = 'mensaje condicionado';
  mostrar: Boolean = false;
  mostrarMensaje(): void {
    this.mostrar = true;
  }

  //----------------------------
  //ngFor
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Solis'),
  ];

  //----------------------------
  //Event Emmiter para recibir un objeto de un comp hijo a un padre
  personaAgregada(persona: Persona) {
    this.personas.push(persona); //desde aqui añadimos al array, ya que aqui si lo conocemos
  }

  //----------------------------
  //Referencias Locales
  //funcion para usar referencias locales
  operarRefLocales(inputA: HTMLInputElement, inputB: HTMLInputElement): void {
    this.result = Number(inputA.value) + Number(inputB.value);
  }

  //----------------------------
  //ViewChild
  //variables y funcion
  @ViewChild('InputA') nombre: ElementRef | undefined;
  @ViewChild('InputB') apellido: ElementRef | undefined;
  nombreCompleto: string = "";
  operarViewChild(): void {
    console.log(this.apellido?.nativeElement.value);
    
    this.nombreCompleto=
      this.nombre?.nativeElement.value + " "
      this.apellido?.nativeElement.value;
  }
}
