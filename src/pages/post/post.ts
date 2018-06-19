import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Service} from "../../service";

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service) {
    console.log(this.service.getUser())
  }

  texto: string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  enviarPost(){ //é chamado quando cria o post
    let token = this.service.getUser().token

    let post = {
      uid: this.service.getUser().id,
      texto: this.texto,
      token: this.service.getUser().token
    }
    console.log(post)
    this.service.enviarPost(post).subscribe(
      res => {
        console.log(res)
        this.navCtrl.pop()
      }
    )
  }


}
