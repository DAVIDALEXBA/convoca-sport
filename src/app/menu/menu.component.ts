import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  public appPages = [
    { title: 'Inicio', url: '/menu/Inicio', icon: 'home' },
    { title: 'Convocatorias', url: '/menu/Convocatorias', icon: 'chatbubbles' },
    { title: 'Usuarios', url: '/tabs/Usuarios', icon: 'people-circle' },
    { title: 'Favoritos', url: '/menu/Favoritos', icon: 'heart' },
  ];
  public labels = [''];
  constructor() {}

}
