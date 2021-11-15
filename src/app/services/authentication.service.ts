import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { alertController } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  authState = new BehaviorSubject(false);

  constructor(
    private router : Router,
    private platform : Platform,
    private storage : Storage,
    private alert : AlertController
  ) { }

    //alert

    async persentarAlerta() {
      const alert = await this.alert.create({
        cssClass: 'my-custom-class',
        header: 'ALERTA!',
        subHeader: 'Error de login!',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['Bueno :D']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }



    login(nombre_usuario,password){
      if(nombre_usuario=="juanito" && password=="1234"){
        this.authState.next(true);
        this.router.navigate(['home']);
        console.log(this.authState)
      }else{
        this.persentarAlerta();
      }

    }

    logout(){
      this.router.navigate(['login']);
      this.authState.next(false);


    }

    isAuthenticated(): boolean {
      return this.authState.value;

    }

    ifLoggin(){

      
    }

}
