import { Component, Input, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import { Evento } from '../interface/evento.interface';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @Input() idEvento: number;
  @Input() reload: any;

  lat: number;
  lng: number;

  arrEventos: Evento[];

  constructor(private eventosService: EventosService) {
    this.idEvento = 0;
    this.lat = 37.3826;
    this.lng = -5.99629;

    this.arrEventos = [];
  }

  async ngOnInit() {

    this.arrEventos = await this.eventosService.getAllEvent();

    this.arrEventos.map(async evento => {
      let direccion = evento.localizacion;
      let response = await this.eventosService.getLocation(direccion);
      evento.latitud = response.results[0].geometry.location.lat;
      evento.longitud = response.results[0].geometry.location.lng;
    })
  }

  async ngOnChanges() {
    if (this.idEvento !== 0) {
      this.arrEventos = await this.eventosService.getEventById(this.idEvento);

      this.arrEventos.map(async evento => {
        let direccion = evento.localizacion;
        let response = await this.eventosService.getLocation(direccion);
        evento.latitud = response.results[0].geometry.location.lat;
        evento.longitud = response.results[0].geometry.location.lng;
      })
    }

    if (this.reload) {
      this.arrEventos = await this.eventosService.getAllEvent();

      this.arrEventos.map(async evento => {
        let direccion = evento.localizacion;
        let response = await this.eventosService.getLocation(direccion);
        evento.latitud = response.results[0].geometry.location.lat;
        evento.longitud = response.results[0].geometry.location.lng;
      })
    }
  }

}
