import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ConvocatoriasComponent } from './convocatorias.component';
import { ModalConvPageModule } from '../modals/modal-conv/modal-conv.module';
import { PipesModule } from '../pipes/pipes.module';
import { FiltroPipe } from '../pipes/filtro.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ModalConvPageModule,
    PipesModule
  ],
  declarations: [ConvocatoriasComponent]
})
export class ConvocatoriasModule {}
