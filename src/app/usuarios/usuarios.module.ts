import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalConvPageModule } from '../modals/modal-conv/modal-conv.module';
import { PipesModule } from '../pipes/pipes.module';
import { FiltroPipe } from '../pipes/filtro.pipe';
import { UsuariosComponent } from './usuarios.component';
import { ModalUserPageModule } from '../modals/modal-user/modal-user.module';
 
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ModalUserPageModule,
    PipesModule
  ],
  declarations: [UsuariosComponent]
})
export class UsuariosModule {}
