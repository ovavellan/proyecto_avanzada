import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarwashService } from '../carwash.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calificacion-pago',
  templateUrl: './calificacion-pago.component.html',
  styleUrls: ['./calificacion-pago.component.scss']
})
export class CalificacionPagoComponent implements OnInit{

  calificacion: number = 0;
  archivo!: File;
  idSolicitud: string | null = "";

  mostrarMensaje = false;
  mostrarSubirArchivo = false;
  form: FormGroup;
  archivoSeleccionado = false;

  constructor(private formBuilder: FormBuilder, private carwashService: CarwashService, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      recaptcha: ['', Validators.required],
      calificacion: ['', Validators.required],
      archivo: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.idSolicitud = this.route.snapshot.paramMap.get('_id');
  }

  calificar(): void {
    this.mostrarMensaje = true;
    this.mostrarSubirArchivo = true;
  }

/*

    const archivo = event.target.files[0];
    console.log('Archivo seleccionado:', archivo.name);
*/
  enviarArchivo(event: any): void {
    this.archivoSeleccionado = true;
  }


  // Método para verificar si el botón de enviar debe estar habilitado o no
  puedeEnviar(): boolean {
    return this.form.valid && this.archivoSeleccionado;
  }


  // Método para enviar el formulario
  enviarFormulario(event: any): void {
    event.preventDefault();

    if (this.puedeEnviar() && this.idSolicitud != null) { 

        const value = this.form.value;

        const formData = new FormData();
        formData.append('idSolicitud', this.idSolicitud);
        formData.append('calificacion', value.calificacion.toString());
        formData.append('archivo', value.archivo);

        console.log(formData);
          
        this.carwashService.actualizarPagoSolicitud(formData).subscribe(
          (response) => {
            console.log(response);
            Swal.fire({
              icon: 'success',
              title: 'Registro completo',
              showConfirmButton: false,
              timer: 1500
            });
          },
          (error) => {
            console.error(error);
          })
      }else{
        this.form.markAllAsTouched();
        console.log("Error");
        Swal.fire({
          icon: 'error',
          title: 'Complete el formulario',
          showConfirmButton: false,
          timer: 1500
        });
      }
  }

  
}
