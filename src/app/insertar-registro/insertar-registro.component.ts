import { Component, OnInit } from '@angular/core';
import { CarwashService } from "../carwash.service";
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-registro',
  templateUrl: './insertar-registro.component.html',
  styleUrls: ['./insertar-registro.component.scss']
})
export class InsertarRegistroComponent implements OnInit {
  form: FormGroup;

  constructor(
    public carwashService: CarwashService,
    public router: Router,
    private formBuilder: FormBuilder
  ) {this.form = new FormGroup({})}
  ngOnInit(): void {
    this.buildForm();

  }
  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)]],
      marcaVehiculo: ['', Validators.required],
      modeloVehiculo: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      horaIngreso: ['', Validators.required],
      tipoLavado: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.insertarRegistro(value);
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  async insertarRegistro(formValue: any) {
    try {
      const nuevaSolicitud = {
        nombre_cliente: formValue.nombre,
        cedula: formValue.cedula,
        direccion: formValue.direccion,
        email: formValue.email,
        marca_vehiculo: formValue.marcaVehiculo,
        modelo_vehiculo: formValue.modeloVehiculo,
        fecha_ingreso: formValue.fechaIngreso,
        hora_ingreso: formValue.horaIngreso,
        tipo_lavado: formValue.tipoLavado
      };

      await this.carwashService.insetarRegistro(nuevaSolicitud);
      console.log("La solicitud ha sido registrada con éxito");
      this.resetForm();
      Swal.fire({
        icon: 'success',
        title: 'Solicitud ingresada de manera exitosa',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.log("Ocurrió un error", error);
    }
  }

  resetForm() {
    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }
}
