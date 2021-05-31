import { Component, OnInit } from '@angular/core';
import { 
  ModalController, 
  NavParams 
  } from '@ionic/angular';

@Component({
  selector: 'app-modal-conv',
  templateUrl: './modal-conv.page.html',
  styleUrls: ['./modal-conv.page.scss'],
})
export class ModalConvPage implements OnInit {
  modalNombre: string;
  modalLugar: string;
  modalFecha: string;
  modalDeporte: string;
  modalDesc: string;
  modelId: number;


  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalNombre = this.navParams.data.paramNombre;
    this.modalDeporte = this.navParams.data.paramDeporte;
    this.modalLugar = this.navParams.data.paramLugar;
    this.modalDesc = this.navParams.data.paramDesc;
    this.modalFecha = this.navParams.data.paramFecha;
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
