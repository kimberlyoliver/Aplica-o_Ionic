import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {Service} from "../../service";
import {HomePage} from "../home/home";
import {PostPage} from "../post/post";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: string;
  senha: string;

  constructor(public navCtrl: NavController, private service: Service) {
  }

  signin(){ //logar
    console.log(this.email, this.senha)
    this.service.signin(this.email, this.senha).subscribe(
      res => {
        console.log(res);
        let u = { //retorna id e token
          id: res.id,
          token: res.token
        }
        this.service.saveUser(u) //armazena o usuário logado
        this.navCtrl.setRoot(HomePage); //muda pra home
      },
      err => {
        console.log(err)
      }
    )
  }

}
