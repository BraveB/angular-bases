import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

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
  ];
  agregarNuevoPersonaje(nuevoPersonaje:Personaje){
    this.personajes.push(nuevoPersonaje)
  }

  constructor( private dbzService:DbzService ) {}
}
