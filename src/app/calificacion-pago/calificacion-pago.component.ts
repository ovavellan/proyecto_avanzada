import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarwashService } from '../carwash.service';

@Component({
  selector: 'app-calificacion-pago',
  templateUrl: './calificacion-pago.component.html',
  styleUrls: ['./calificacion-pago.component.scss']
})
export class CalificacionPagoComponent {

  mostrarMensaje = false;
  mostrarSubirArchivo = false;
  form: FormGroup;
  archivoSeleccionado = false;

  constructor(private formBuilder: FormBuilder, private carwashService: CarwashService) {
    this.form = this.formBuilder.group({
      recaptcha: ['', Validators.required] // Validación para asegurarse de que el recaptcha esté completado
    });
  }

  calificar(): void {
    this.mostrarMensaje = true;
    this.mostrarSubirArchivo = true;
  }


  enviarArchivo(event: any): void {
    const archivo = event.target.files[0];
    console.log('Archivo seleccionado:', archivo.name);
    this.archivoSeleccionado = true;
  }


  // Método para verificar si el botón de enviar debe estar habilitado o no
  puedeEnviar(): boolean {
    return this.form.valid && this.archivoSeleccionado;
  }


  // Método para enviar el formulario
  enviarFormulario(): void {
    if (this.puedeEnviar()) {
      // Aquí puedes implementar la lógica para enviar el formulario
      console.log('Formulario enviado');
    }
  }
}
