import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarwashService {

  url= "http://52.5.117.69:3500/";

  datosTabla: any[] = [];
  constructor(public http:HttpClient) { }

  insetarRegistro(data: any){
    return new Promise(resolve => {
      this.http.post(this.url + 'solicitud/', data).subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }

  getEstadoPendiente(){
    return new Promise(resolve => {
      this.http.get(this.url + 'solicitud/getTabla1').subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }

  getEstadoAceptado(){
    return new Promise(resolve => {
      this.http.get(this.url + 'solicitud/getTablaAceptados').subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }

  getById(id: string){
    return new Promise(resolve => {
      this.http.get(this.url + 'solicitud/getById/' + id).subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }

  rechazarSolicitud(idSolicitud: string) {
    return new Promise(resolve => {
      this.http.post(this.url + 'solicitud/rechazarRegistro', { idSolicitud }).subscribe({
        next: (responseData) => {
          resolve(responseData);
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }

  impagoRegistro(idSolicitud: string) {
    return new Promise(resolve => {
      this.http.post(this.url + 'solicitud/impagoRegistro', { idSolicitud }).subscribe({
        next: (responseData) => {
          resolve(responseData);
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }

  aceptarSolicitud(idSolicitud: string) {
    return new Promise(resolve => {
      this.http.post(this.url + 'solicitud/aceptarRegistro', { idSolicitud }).subscribe({
        next: (responseData) => {
          resolve(responseData);
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }

  impagoSolicitud(idSolicitud: string) {
    return new Promise(resolve => {
      this.http.post(this.url + 'solicitud/impagoRegistro', { idSolicitud }).subscribe({
        next: (responseData) => {
          resolve(responseData);
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }

  pagoSolicitud(idSolicitud: string) {
    return new Promise(resolve => {
      this.http.post(this.url + 'solicitud/pagoRegistro', { idSolicitud }).subscribe({
        next: (responseData) => {
          resolve(responseData);
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }


  actualizarSolicitud(idSolicitud: string, data: any) {
    return new Promise(resolve => {
      this.http.post(this.url + 'solicitud/actualizarRegistro', { idSolicitud, ...data }).subscribe({
        next: (responseData) => {
          resolve(responseData);
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }

  actualizarPagoSolicitud(data: FormData): Observable<any> {
    return this.http.post(this.url + 'solicitud/actualizarPagoRegistro', data);
  }
}
