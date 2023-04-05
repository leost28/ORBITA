import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from './interface/evento.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  private baseUrl: string;

  arrEventos: any[];

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/locales';

    this.arrEventos = [];
  }

  login(localForm: any): Promise<any> {
    console.log(localForm);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.post(`${this.baseUrl}/login`, localForm, httpOptions).toPromise();
  }

  registro(formValues: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.post(`${this.baseUrl}/registro`, formValues, httpOptions).toPromise();
  }

  // AGREGAR EVENTO
  agregarEvento(newEvento: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('local_token')!
      })
    }
    return this.httpClient.post<any>(`${this.baseUrl}/perfilLocal`, newEvento, httpOptions).toPromise();
  }

}
