import { Component } from "@angular/core";
import { PersonaComponent } from "../persona/persona.component";


@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css'],
    //styles: [` h1{ color: blue;  }`],
    standalone: true,
    imports: [PersonaComponent]
})
export class PersonasComponent{
    deshabilitar = false;
 
    
    titulo = '';

    mensaje = 'No se ha agregado ninguna persona';
    agregarPersona(){
        this.mensaje= 'Persona agregada';
    }

    modificarTitulo(event: Event){ //se castea y luego se extrae el valor
        this.titulo = (<HTMLInputElement> event.target).value
    }

}