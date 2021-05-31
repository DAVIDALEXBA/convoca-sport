import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';
import { FavoritosPage } from './favoritos/favoritos.page';
import { HomePage } from './home/home.page';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: MenuComponent,
    children:[
      {
        path: 'Convocatorias',
        component: ConvocatoriasComponent
      },
      {
        path: 'Inicio',
        component: HomePage
      },
      {
        path: 'Favoritos',
        component: FavoritosPage
      }
    ]
  },
  {
    path: 'modal-conv',
    component: MenuComponent,
    loadChildren: () => import('./modals/modal-conv/modal-conv.module').then( m => m.ModalConvPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/usuarios-tab/usuarios-tab.module').then( m => m.UsuariosTabPageModule)
  },
  {
    path: 'usuarios-create',
    loadChildren: () => import('./usuarios-create/usuarios-create.module').then( m => m.UsuariosCreatePageModule)
  },
  {
    path: 'modal-user',
    loadChildren: () => import('./modals/modal-user/modal-user.module').then( m => m.ModalUserPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
