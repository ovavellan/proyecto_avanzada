import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { CarwashService } from "../carwash.service";

@Component({
  selector: 'app-tabla-confirmados',
  templateUrl: './tabla-confirmados.component.html',
  styleUrls: ['./tabla-confirmados.component.scss']
})
export class TablaConfirmadosComponent implements OnInit {
  public registros: any;


  constructor(
    public CarwashService: CarwashService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.traerRegistrosPendientes();
  }

  traerRegistrosPendientes() {
    this.CarwashService.getEstadoAceptado().then(data => this.registros = data);
  }

  redirectToMostrarDetalle(_id:number){
    this.router.navigate(['/detallesAceptados', {_id:_id}])
  }


}
