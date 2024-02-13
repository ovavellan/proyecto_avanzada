import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InsertarRegistroComponent} from "./insertar-registro/insertar-registro.component";
import {EstadoPendienteComponent} from "./estado-pendiente/estado-pendiente.component";
import {ModalComponent} from "./modal/modal.component";
import {CalificacionPagoComponent} from "./calificacion-pago/calificacion-pago.component";
import {ActualizarComponent} from "./actualizar/actualizar.component";
import {TablaConfirmadosComponent} from "./tabla-confirmados/tabla-confirmados.component";
import {DetallesAceptadosComponent} from "./detalles-aceptados/detalles-aceptados.component";

const routes: Routes = [
  {path: "insertarRegistro", component: InsertarRegistroComponent,
    pathMatch:"full"},
  {path: "estadoPendiente", component: EstadoPendienteComponent,
    pathMatch:"full"},
  {path: "verDetalles", component: ModalComponent,
    pathMatch:"full"},
  {path: "calificacionPago", component: CalificacionPagoComponent,
    pathMatch:"full"},
  {path: "actualizarDatos", component: ActualizarComponent,
    pathMatch:"full"},
  {path: "tablaConfirmados", component: TablaConfirmadosComponent,
    pathMatch:"full"},
  {path: "detallesAceptados", component: DetallesAceptadosComponent,
    pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
