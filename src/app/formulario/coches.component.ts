import { Component } from '@angular/core';
import { Coche } from './coche';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html'
})

export class CochesComponent {

    formCoches = this.formBuilder.group({
        marca: '',
        matricula: '',
        color: ''
      });
  public coche: Coche;
  public coches: Array<Coche>;

  constructor(private formBuilder: FormBuilder) {
    this.coche = new Coche("","","");
    this.coches = [ new Coche("Ford Focus","2903CGD", "#FFF"),new Coche("Coche","2132CC", "#231")];
  }

  onSubmit(){
    // Process checkout data here
    this.coches.push(this.formCoches.value);
    console.log(this.formCoches.value);
  }
}