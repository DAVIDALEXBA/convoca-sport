import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, MenuController, ModalController, ToastController } from '@ionic/angular';
import { ModalConvPage } from '../modals/modal-conv/modal-conv.page';
import { ConvocatoriasService } from '../services/convocatorias.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  @ViewChild('lista') lista: IonList;
  dataReturned: any;
  Convs: any = [];
  favorito: string;

  constructor(
    private menuCtrl: MenuController, 
    public alertCtrl: AlertController, 
    private convocatoriaService: ConvocatoriasService, 
    private router: Router,  
    public modalController: ModalController, 
    private toastCtrl: ToastController,
  ) { }

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


  ngOnInit() {
  }

  textoBuscar = "";
  buscar(event) {
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  async borrar(item){

    if( item.favorito == "1" ){

      this.favorito = "0";

    }else if( item.favorito == "0" ){

      this.favorito = "1";

    }
    this.convocatoriaService.updateConv(item.id, this.favorito)
        .subscribe(() => {
          this.presentToast('se eliminó en favoritos');
          this.lista.closeSlidingItems();

          location.replace('/menu/Favoritos');
          
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

}
