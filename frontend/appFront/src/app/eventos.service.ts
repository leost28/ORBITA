import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  baseUrl: string;
  baseUrlEvent: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
    this.baseUrlEvent = 'http://localhost:3000/api/eventos';
  }

  getAllEvent(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.get<any>(`${this.baseUrl}/perfil`, httpOptions).toPromise();
  }

  getEventById(id: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.get<any>(`${this.baseUrlEvent}/${id}`, httpOptions).toPromise();
  }

  getEventByToken(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('local_token')!
      })
    }
    return this.httpClient.get<any>(`${this.baseUrlEvent}`, httpOptions).toPromise();
  }


  getLocation(direccion: string): Promise<any> {
    return this.httpClient.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDyehZcFqZdnsfoGFxaldHE8bnK81Y99w8&address=${direccion}`).toPromise();
  }

  addEvent(id: number): Promise<any> {
    console.log(localStorage.getItem('user_token'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('user_token')!
      })
    }
    return this.httpClient.post(`${this.baseUrlEvent}`, { id: id }, httpOptions).toPromise();
  }
}
