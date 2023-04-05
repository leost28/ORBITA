import { Component, Input, OnInit } from '@angular/core';
import { UserEvent } from '../interface/user_event.interface';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-orbita',
  templateUrl: './orbita.component.html',
  styleUrls: ['./orbita.component.css']
})
export class OrbitaComponent implements OnInit {
  @Input() reload: any;

  arrUserEvents: UserEvent[];

  constructor(private usuariosService: UsuariosService) {
    this.arrUserEvents = [];
  }

  async ngOnInit() {
    this.arrUserEvents = await this.usuariosService.getUserEvent()
  }

  async ngOnChanges() {
    if (this.reload) {
      this.arrUserEvents = await this.usuariosService.getUserEvent()
    }
  }

}
