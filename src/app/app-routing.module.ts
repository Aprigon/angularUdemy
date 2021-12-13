import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpleadoComponent } from './ejercicioEmpleadosError/empleado.component';
import { ErrorComponent } from './ejercicioEmpleadosError/error.component';
import { CochesComponent } from './formulario/coches.component';

const routes: Routes = [
  {path:'', component: EmpleadoComponent},
  {path:'empleado', component: EmpleadoComponent},
  {path:'coches', component: CochesComponent},
  {path:'**', component: ErrorComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
