import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';

import { Evento } from '../interface/evento.interface';

@Component({
  selector: 'app-proximos-eventos',
  templateUrl: './proximos-eventos.component.html',
  styleUrls: ['./proximos-eventos.component.css']
})
export class ProximosEventosComponent implements OnInit {

  arrEventos: Evento[];

  constructor(private eventosService: EventosService) {
    this.arrEventos = [];
  }

  async ngOnInit() {
    this.arrEventos = await this.eventosService.getEventByToken();
    console.log(this.arrEventos);
  }

}
