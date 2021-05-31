import { Component, NgZone, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.page.html',
  styleUrls: ['./usuarios-create.page.scss'],
})
export class UsuariosCreatePage implements OnInit {
  userForm: FormGroup;

  nombre: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  correo: string;
  rol: string;
  usuario: string;
  contrasena: string;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private loadingCtrl: LoadingController,
    private http: HttpClient,
    private menuCtrl: MenuController
  ) {
    this.userForm = this.formBuilder.group({
      nombre: [''],
      apellidos: [''],
      direccion: [''],
      telefono: [''],
      correo: [''],
      rol: [''],
      usuario: [''],
      contrasena: [''],
    });
  }

  ngOnInit() {}

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      console.log('data');
      console.log(this.userForm.value);
      this.http
        .post(
          'http://127.0.0.1:8080/proyecto-portal-deportivo_server/UsuarioCreate',
          JSON.stringify(this.userForm.value)
        )
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body', val);
            this.present('Cargando lista de usuarios ...');
          },
          (response) => {
            console.log('POST call in error', response);
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    }
  }

  isLoading = false;
  async present(message: string) {
    this.isLoading = true;
    return await this.loadingCtrl
      .create({
        message,
        duration: 2000,
      })
      .then((a) => {
        a.present().then(() => {
          console.log('presented');
          location.replace('/tabs/Usuarios');
          if (this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
  }
}
