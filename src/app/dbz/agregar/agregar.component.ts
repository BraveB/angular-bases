import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre:'',
    poder: 0
  };
  @Input() personajes: Personaje[] = [];

  agregar(){
    console.log("sirve :D")
    if(this.nuevo.nombre.length<=0) return;
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder:0
    }
  }
}
