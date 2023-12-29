import { Component } from '@angular/core';
import { CalcButtonsComponent } from '../calc-buttons/calc-buttons.component';
import { CalcResultadoComponent } from '../calc-resultado/calc-resultado.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CalcButtonsComponent, CalcResultadoComponent, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  
  resultadoPadre = 0;
  //obtenemos el resultado del emiter directamente y 
  //lo reemplazamos por la variable resultadoPadre,
  //la cual va a el comp resultado y se muestra
  ObtenerResultado(numero: number): void {
    this.resultadoPadre = numero;
  }
}
