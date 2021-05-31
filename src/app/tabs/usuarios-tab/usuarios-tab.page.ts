import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './usuarios-tab.page.html',
  styleUrls: ['./usuarios-tab.page.scss'],
})
export class UsuariosTabPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  public appPages = [
    { title: 'Inicio', url: '/menu/Inicio', icon: 'home' },
    { title: 'Convocatorias', url: '/menu/Convocatorias', icon: 'chatbubbles' },
    { title: 'Usuarios', url: '/tabs/Usuarios', icon: 'people-circle' },
    { title: 'Favoritos', url: '/menu/Favoritos', icon: 'heart' }
  ];
  public labels = [''];
  openEnd() {
    this.menu.close();
  }

}
