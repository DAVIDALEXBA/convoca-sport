import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalConvPageRoutingModule } from './modal-conv-routing.module';

import { ModalConvPage } from './modal-conv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalConvPageRoutingModule
  ],
  declarations: [ModalConvPage]
})
export class ModalConvPageModule {}
