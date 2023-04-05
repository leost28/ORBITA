import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalesService } from '../locales.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario_usuario: FormGroup;
  formulario_local: FormGroup;
  isHide: boolean;

  constructor(private usuariosService: UsuariosService, private localesService: LocalesService) {
    this.formulario_usuario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      primer_apellido: new FormControl('', [Validators.required]),
      segundo_apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      nombre_usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.formulario_local = new FormGroup({
      nombre_local: new FormControl('', [Validators.required]),
      direccion_local: new FormControl('', [Validators.required]),
      ciudad_local: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      usuario_local: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.isHide = false;
  }

  ngOnInit(): void {
  }

  async onSubmitUser() {
    const response = await this.usuariosService.registro(this.formulario_usuario.value);
    console.log(response);
  }

  async onSubmitLocal() {
    const response = await this.localesService.registro(this.formulario_local.value);
    console.log(response);
  }

  changeForm() {
    this.isHide = !this.isHide
  }

}
