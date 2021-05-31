import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonList, MenuController, ModalController, ToastController } from '@ionic/angular';
import { ModalUserPage } from '../modals/modal-user/modal-user.page';
import { ConvocatoriasService } from '../services/convocatorias.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  Users: any = [];
  @ViewChild('lista') lista: IonList;

  ionViewDidEnter() {
    this.convocatoriaService.getUsers().subscribe((response) => {
      this.Users = response;
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.ionViewDidEnter();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  constructor(
    private menuCtrl: MenuController,
    private convocatoriaService: ConvocatoriasService,
    public alertCtrl: AlertController, 
    private toastCtrl: ToastController,
    public modalController: ModalController, 
  ) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuCtrl.toggle();
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
            this.convocatoriaService.deleteUser(item.id)
                .subscribe(() => {
              this.presentToast('Eliminado correctamente');
              this.lista.closeSlidingItems();
              location.replace('/tabs/Usuarios');
            })
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  
  dataReturned: any;
  async openModal(item) {
    console.log(item);
    const modal = await this.modalController.create({
      component: ModalUserPage,
      componentProps: {
        "nombre": item.nombre,
        "apellidos": item.apellidos,
        "direccion": item.direccion,
        "telefono": item.telefono,
        "correo": item.correo,
        "rol": item.rol,
        "usuario": item.usuario,
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

  textoBuscar = "";
  buscar(event) {
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
