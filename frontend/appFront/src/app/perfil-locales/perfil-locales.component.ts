import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-locales',
  templateUrl: './perfil-locales.component.html',
  styleUrls: ['./perfil-locales.component.css']
})
export class PerfilLocalesComponent implements OnInit {

  nombre_local: string;
  descripcion: string;

  constructor() {

    this.nombre_local = '';
    this.descripcion = '';
  }

  ngOnInit(): void {
    this.nombre_local = localStorage.getItem('localname')!.toString();
    this.descripcion = localStorage.getItem('local_desc')!.toString();
  }

}
