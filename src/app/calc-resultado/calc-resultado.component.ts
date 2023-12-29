import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calc-resultado',
  standalone: true,
  imports: [],
  templateUrl: './calc-resultado.component.html',
  styleUrl: './calc-resultado.component.css',
})
export class CalcResultadoComponent {
  //con input lo podemos asignar a una variable del padre, property binding
  @Input() resultado: number = 0;
}
