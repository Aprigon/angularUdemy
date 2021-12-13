import { Component } from '@angular/core';
import { Coche } from './coche';
import { FormBuilder } from '@angular/forms';
import { PeticionesService } from '../services/peticiones.services';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService]
})

export class CochesComponent {

    formCoches = this.formBuilder.group({
        marca: '',
        matricula: '',
        color: ''
      });
  public coche: Coche;
  public coches: Array<Coche>;

  constructor(private formBuilder: FormBuilder, private peticionesService: PeticionesService) {
    this.coche = new Coche("","","");
    this.coches = [ new Coche("Ford Focus","2903CGD", "#FFF"),new Coche("Coche","2132CC", "#231")];
  }

  ngOnInit(){
      this.peticionesService.getArticulos().subscribe(
          result => {
            console.log(result);
          },
          error => {
              console.log("Error, no se puede acceder al recurso de la peticion de articulos.")
          }
      )
  }
  onSubmit(){
    // Process checkout data here
    this.coches.push(this.formCoches.value);
    console.log(this.formCoches.value);
  }
}