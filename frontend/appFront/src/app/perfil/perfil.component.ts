import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  id_evento: number;
  nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  usuario: string;
  reload: any;

  constructor() {
    this.id_evento = 0;
    this.nombre = '';
    this.primer_apellido = '';
    this.segundo_apellido = '';
    this.usuario = '';
  }

  ngOnInit(): void {
    if (localStorage.getItem('segundo_apellido')?.toString !== null) {
      this.usuario = localStorage.getItem('nombre')!.toString() + ' ' + localStorage.getItem('primer_apellido')!.toString();
    } else {
      this.usuario = localStorage.getItem('nombre')!.toString() + ' ' + localStorage.getItem('primer_apellido')!.toString() + ' ' + localStorage.getItem('segundo_apellido')!.toString();
    }
  }

  onidEvento($event: number) {
    this.id_evento = $event;
  }

  onReload($event: any) {
    this.reload = $event;
  }

}
