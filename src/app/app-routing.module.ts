import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InsertarRegistroComponent} from "./insertar-registro/insertar-registro.component";
import {EstadoPendienteComponent} from "./estado-pendiente/estado-pendiente.component";
import {ModalComponent} from "./modal/modal.component";

const routes: Routes = [
  {path: "insertarRegistro", component: InsertarRegistroComponent,
    pathMatch:"full"},
  {path: "estadoPendiente", component: EstadoPendienteComponent,
    pathMatch:"full"},
  {path: "verDetalles", component: ModalComponent,
    pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
