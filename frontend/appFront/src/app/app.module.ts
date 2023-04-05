import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FooterComponent } from './footer/footer.component';
import { MapaComponent } from './mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { EventosComponent } from './eventos/eventos.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { PerfilLocalesComponent } from './perfil-locales/perfil-locales.component';
import { ProximosEventosComponent } from './proximos-eventos/proximos-eventos.component';
import { OrbitaComponent } from './orbita/orbita.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    IndexComponent,
    LoginComponent,
    PerfilComponent,
    FooterComponent,
    MapaComponent,
    EventosComponent,
    CrearEventoComponent,
    PerfilLocalesComponent,
    ProximosEventosComponent,
    OrbitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDyehZcFqZdnsfoGFxaldHE8bnK81Y99w8'
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
