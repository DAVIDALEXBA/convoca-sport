import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { UsuariosTabPage } from './usuarios-tab.page';
import { ConvocatoriasComponent } from 'src/app/convocatorias/convocatorias.component';
import { UsuariosComponent } from 'src/app/usuarios/usuarios.component';
import { UsuariosCreatePageModule } from 'src/app/usuarios-create/usuarios-create.module';
import { UsuariosCreatePage } from 'src/app/usuarios-create/usuarios-create.page';


const routes: Routes = [
  {
    path: '',
    component: UsuariosTabPage,
    children: [
      {
        path: 'Usuarios',
        component: UsuariosComponent
      },
      {
        path: 'New-Usuario',
        component: UsuariosCreatePage      
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsuariosTabPage]
})
export class UsuariosTabPageModule {}
