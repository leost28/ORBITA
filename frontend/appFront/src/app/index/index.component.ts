import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLogged: boolean;
  usuario: string;

  constructor(private router: Router, private usuariosService: UsuariosService) {
    this.isLogged = false;
    this.usuario = '';
  }

  ngOnInit(): void { }

  ngDoCheck() {
    if (localStorage.getItem('user_token') !== null) {
      this.isLogged = true;
      this.usuario = localStorage.getItem('username')!.toString().toUpperCase();
    } else if (localStorage.getItem('local_token') !== null) {
      this.isLogged = true;
      this.usuario = localStorage.getItem('localname')!.toString().toUpperCase();
    } else {
      this.isLogged = false;
    }
  }

  clickLogout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

}
