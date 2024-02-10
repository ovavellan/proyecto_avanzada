import { Component } from '@angular/core';
import { CarwashService } from "../carwash.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-registro',
  templateUrl: './insertar-registro.component.html',
  styleUrls: ['./insertar-registro.component.scss']
})
export class InsertarRegistroComponent {

  public nombre: string = '';
  public cedula: string = '';
  public direccion: string = '';
  public email: string = '';
  public marcaVehiculo: string = '';
  public modeloVehiculo: string = '';
  public fechaIngreso: string = '';
  public horaIngreso: string = '';
  public empleadoACargo: string = '';
  public tipoLavado: string = '';

  constructor(public carwashService: CarwashService,
              public router: Router) {}

  async insertarRegistro() {
    try {
      let nuevaSolicitud = this.construirObtenerNuevaSolicitud();
      await this.carwashService.insetarRegistro(nuevaSolicitud);
      console.log("La solicitud ha sido registrada con éxito");
      this.nombre = '';
      this.cedula = '';
      this.direccion = '';
      this.email = '';
      this.marcaVehiculo = '';
      this.modeloVehiculo = '';
      this.fechaIngreso = '';
      this.horaIngreso = '';
      this.empleadoACargo = '';
      this.tipoLavado = '';
      alert("Solicitud ingresada de manera exitosa");


    } catch (error) {
      console.log("Ocurrió un error", error);
    }
  }

  construirObtenerNuevaSolicitud() {
    let nuevaSolicitud = {
      nombre_cliente: this.nombre,
      cedula: this.cedula,
      direccion: this.direccion,
      email: this.email,
      marca_vehiculo: this.marcaVehiculo,
      modelo_vehiculo: this.modeloVehiculo,
      fecha_ingreso: this.fechaIngreso,
      hora_ingreso: this.horaIngreso,
      empleado_a_cargo: this.empleadoACargo,
      tipo_lavado: this.tipoLavado,
    };
    return nuevaSolicitud;
  }

}
