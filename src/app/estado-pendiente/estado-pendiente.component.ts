import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { CarwashService } from "../carwash.service";

@Component({
  selector: 'app-estado-pendiente',
  templateUrl: './estado-pendiente.component.html',
  styleUrls: ['./estado-pendiente.component.scss']
})
export class EstadoPendienteComponent implements OnInit {
  public registros: any;


  constructor(
    public CarwashService: CarwashService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.traerRegistrosPendientes();
  }

  traerRegistrosPendientes() {
    this.CarwashService.getEstadoPendiente().then(data => this.registros = data);
  }

  redirectToMostrarDetalle(_id:number){
    this.router.navigate(['/verDetalles', {_id:_id}])
  }

}
