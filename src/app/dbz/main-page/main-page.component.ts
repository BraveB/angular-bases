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

  nuevo:Personaje={
    nombre: 'Trunks',
    poder: 1400
  }

  agregar(){
    console.log(this.nuevo)
  }
  // cambiarNombre(event:any){
  //   console.log(event.target.value);
  // }
}
