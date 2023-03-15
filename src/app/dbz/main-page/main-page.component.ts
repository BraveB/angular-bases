import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder:1000
    },
    {
      nombre: 'Vegeta',
      poder:2000
    },
  ]

  agregar(){
    if(this.nuevo.nombre.length<=0) return;
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder:0
    }
  }
}
