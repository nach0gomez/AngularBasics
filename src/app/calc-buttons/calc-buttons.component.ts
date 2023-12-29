import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc-buttons',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calc-buttons.component.html',
  styleUrl: './calc-buttons.component.css',
})
export class CalcButtonsComponent {
  //variables para operar
  opA: number = 0;
  opB: number = 0;

  resultado: number = 0;

  //Event Emmiter para recibir un objeto de un comp hijo a un padre
  @Output() result = new EventEmitter<number>();

  //funcion para (onClick), que al dar click en operar, se llame al evento emitir, el cual
  //emite otro evento llamado result el cual propaga la informacion que se le brinde, en este
  //caso, emit(this.resultado)
  emitir(): void {
    //emitimos las variables al comp padre
    this.resultado = Number(this.opA) + Number(this.opB);
    this.result.emit(this.resultado);
  }
}
