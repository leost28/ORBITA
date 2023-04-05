import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
  }

  registro(formValues: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.post(`${this.baseUrl}/registro`, formValues, httpOptions).toPromise();
  }

  login(body: { email: string, password: string }): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.post(`${this.baseUrl}/login`, body, httpOptions).toPromise();
  }

  getUserEvent(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('user_token')!
      })
    }
    return this.httpClient.get<any>(`${this.baseUrl}/events`, httpOptions).toPromise();
  }

}
