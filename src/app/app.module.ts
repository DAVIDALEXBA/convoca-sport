import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuPageModule } from './menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ConvocatoriasModule } from './convocatorias/convocatorias.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PipesModule } from './pipes/pipes.module';
import { FavoritosPageModule } from './favoritos/favoritos.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MenuPageModule, HttpClientModule, CommonModule, ConvocatoriasModule, PipesModule, UsuariosModule, FavoritosPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
