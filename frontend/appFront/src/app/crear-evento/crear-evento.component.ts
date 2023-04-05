import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalesService } from '../locales.service';


@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {

  newEvento: FormGroup;
  dir_evento: string;

  constructor(private localesService: LocalesService) {

    this.dir_evento = '';

    this.newEvento = new FormGroup({
      nombre_evento: new FormControl('', [Validators.required]),
      descripcion: new FormControl(''),
      localizacion: new FormControl(this.dir_evento),
      fecha_evento: new FormControl(''),
      categoria: new FormControl('')
    });

  }

  ngOnInit(): void {
    this.dir_evento = localStorage.getItem('direccion')!;

    this.newEvento = new FormGroup({
      nombre_evento: new FormControl('', [Validators.required]),
      descripcion: new FormControl(''),
      localizacion: new FormControl(this.dir_evento),
      fecha_evento: new FormControl(''),
      categoria: new FormControl('')
    });

  }

  onSubmit() {
    this.localesService.agregarEvento(this.newEvento.value);
    console.log(this.newEvento.value);
  }

  checkErrorUser(controlName: string, error: string): boolean {
    return this.newEvento.get(controlName)!.hasError(error) && this.newEvento.get(controlName)!.touched;
  }
}
