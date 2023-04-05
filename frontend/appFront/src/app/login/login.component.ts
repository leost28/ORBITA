import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalesService } from '../locales.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario_usuario: FormGroup;
  formulario_local: FormGroup;
  error: string;
  isHide: boolean;


  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private localesService: LocalesService) {

    this.formulario_usuario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)
      ]),
      password: new FormControl('', [Validators.required,])
    });

    this.formulario_local = new FormGroup({
      usuario_local: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required,])
    })

    this.error = '';
    this.isHide = false;
  }

  ngOnInit(): void {
  }

  onSubmitUser() {
    this.error = '';

    this.usuariosService.login(this.formulario_usuario.value)
      .then(response => {
        console.log(response);
        if (response.Error) {
          this.error = response.Error;
        } else {
          console.log(response);
          localStorage.setItem('user_token', response.token);
          localStorage.setItem('id_token', response.id);
          localStorage.setItem('username', response.username);
          localStorage.setItem('nombre', response.nombre);
          localStorage.setItem('primer_apellido', response.apellidoUno);
          localStorage.setItem('segundo_apellido', response.apellidoDos);
          this.router.navigate(['/perfil']);
        }
      })
      .catch(err => console.log(err));
  }

  onSubmitLocal() {
    this.error = '';
    this.localesService.login(this.formulario_local.value)
      .then(response => {
        console.log(response);
        if (response.Error) {
          this.error = response.Error;
        } else {
          console.log(response);
          localStorage.setItem('local_token', response.token);
          localStorage.setItem('localname', response.local_name);
          localStorage.setItem('local_desc', response.local_desc);
          localStorage.setItem('direccion', response.direccion)
          this.router.navigate(['/perfilLocal']);
        }
      })
      .catch(err => console.log(err));
  }

  changeForm() {
    this.isHide = !this.isHide
  }

  checkErrorUser(controlName: string, error: string): boolean {
    return this.formulario_usuario.get(controlName)!.hasError(error) && this.formulario_usuario.get(controlName)!.touched;
  }

  checkErrorLocal(controlName: string, error: string): boolean {
    return this.formulario_local.get(controlName)!.hasError(error) && this.formulario_local.get(controlName)!.touched;
  }
}
