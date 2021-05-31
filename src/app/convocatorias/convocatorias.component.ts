import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {ConvocatoriasService} from '../services/convocatorias.service'
import { AlertController, IonList, MenuController, ModalController, ToastController } from '@ionic/angular';
import { ModalConvPage } from '../modals/modal-conv/modal-conv.page';

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.scss'],
})
export class ConvocatoriasComponent implements OnInit {
  @ViewChild('lista') lista: IonList;

  Convs: any = [];
  favorito: string;

  constructor(
    private menuCtrl: MenuController, 
    public alertCtrl: AlertController, 
    private convocatoriaService: ConvocatoriasService, 
    private router: Router,  
    public modalController: ModalController, 
    private toastCtrl: ToastController,) { }
    
  dataReturned: any;

  ngOnInit() {}

  ionViewDidEnter() {
    this.convocatoriaService.getConvs().subscribe((response) => {
      this.Convs = response;
    })
  }

  async openModal(item) {
    console.log(item);
    const modal = await this.modalController.create({
      component: ModalConvPage,
      componentProps: {
        "paramID": item.id,
        "paramNombre": item.nombre,
        "paramDeporte": item.deporte,
        "paramDesc": item.descripcion,
        "paramFecha": item.fecha,
        "paramLugar": item.lugar,
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  async favoritos(item){

    if( item.favorito == "1" ){

      this.favorito = "0";

    }else if( item.favorito == "0" ){

      this.favorito = "1";

    }
    this.convocatoriaService.updateConv(item.id, this.favorito)
        .subscribe(() => {
          this.presentToast('Guardó en favoritos');
          this.lista.closeSlidingItems();
          
    })
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.ionViewDidEnter();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async borrar(item) {

    const alert = await this.alertCtrl.create({
      header: "Confirmación",
      message: "¿Deseas <stong>eliminar</strong> este registro?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: Cancelar");
          }
        },
        {
          text: "Eliminar",
          handler: () => {
            console.log("ENTRO A HANDLER");
            this.convocatoriaService.deleteConv(item.id)
                .subscribe(() => {
              this.presentToast('Eliminado correctamente');
              this.lista.closeSlidingItems();
            })
          }
        }
      ]
    });
    await alert.present();
  }

  textoBuscar = "";
  buscar(event) {
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
