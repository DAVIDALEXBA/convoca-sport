import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.page.html',
  styleUrls: ['./modal-user.page.scss'],
})
export class ModalUserPage implements OnInit {
  nombre: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  correo: string;
  rol: string;
  usuario: string;
  contrasena: string;


  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.nombre = this.navParams.data.nombre;
    this.apellidos = this.navParams.data.apellidos;
    this.direccion = this.navParams.data.direccion;
    this.telefono = this.navParams.data.telefono;
    this.correo = this.navParams.data.correo;
    this.rol = this.navParams.data.rol;
    this.usuario = this.navParams.data.usuario;
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }


}
