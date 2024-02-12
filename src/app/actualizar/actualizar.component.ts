import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarwashService } from "../carwash.service";

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.scss'
})
export class ActualizarComponent implements OnInit{

  public registro: any;
  public _id: string = '';
  public nombre_cliente: string = '';
  public cedula: string = '';
  public direccion: string = '';
  public email: string = '';
  public marca_vehiculo: string = '';
  public modelo_vehiculo: string = '';
  public fecha_ingreso: string = '';
  public hora_ingreso: string = '';
  public tipo_lavado: string = '';
  public estado: string = '';

  constructor(public CarwashService: CarwashService,
              public ActivateRoute: ActivatedRoute,
              public router: Router) {
    this._id = this.ActivateRoute.snapshot.params['_id'];
  }

  ngOnInit(): void {
    this.obtenerUsuarioPorId();
  }

  async obtenerUsuarioPorId() {
    try {
      this.registro = await this.CarwashService.getById(this._id);
      this.nombre_cliente = this.registro.nombre_cliente;
      this.cedula = this.registro.cedula;
      this.direccion = this.registro.direccion;
      this.email = this.registro.email;
      this.marca_vehiculo = this.registro.marca_vehiculo;
      this.modelo_vehiculo = this.registro.modelo_vehiculo;
      this.fecha_ingreso = this.registro.fecha_ingreso;
      this.hora_ingreso = this.registro.hora_ingreso;
      this.tipo_lavado = this.registro.tipo_lavado;
      this.estado = this.registro.estado;
    } catch (error) {
      console.log(error);
    }
  }

  async actualizarRegistro() {
    try {
      const data = {
        nombre_cliente: this.nombre_cliente,
        cedula: this.cedula,
        direccion: this.direccion,
        email: this.email,
        marca_vehiculo: this.marca_vehiculo,
        modelo_vehiculo: this.modelo_vehiculo,
        fecha_ingreso: this.fecha_ingreso,
        hora_ingreso: this.hora_ingreso,
        tipo_lavado: this.tipo_lavado,
        estado: this.estado
      };
      await this.CarwashService.actualizarSolicitud(this._id, data);
      console.log('Registro actualizado correctamente');
      alert("El registro se ha actualizado con éxito")
      this.router.navigate(['/estadoPendiente'])
    } catch (error) {
      console.log(error);
    }
  }


}
