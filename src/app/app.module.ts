import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InsertarRegistroComponent } from './insertar-registro/insertar-registro.component';
import { EstadoPendienteComponent } from './estado-pendiente/estado-pendiente.component';
import { ModalComponent } from './modal/modal.component';
import {CalificacionPagoComponent} from "./calificacion-pago/calificacion-pago.component";
import {ActualizarComponent} from "./actualizar/actualizar.component";

import {NgxCaptchaModule } from "ngx-captcha";
import { TablaConfirmadosComponent } from './tabla-confirmados/tabla-confirmados.component';



@NgModule({
  declarations: [
    AppComponent,
    InsertarRegistroComponent,
    EstadoPendienteComponent,
    ModalComponent,
    CalificacionPagoComponent,
    ActualizarComponent,
    TablaConfirmadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
