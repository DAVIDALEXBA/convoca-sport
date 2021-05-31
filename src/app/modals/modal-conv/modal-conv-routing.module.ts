import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalConvPage } from './modal-conv.page';

const routes: Routes = [
  {
    path: '',
    component: ModalConvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalConvPageRoutingModule {}
