import { Component } from '@angular/core';
import { NavController, ModalController, App } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html'
})
export class ConfigurationPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public app: App) {


  }

  goBack(){
    this.app.getRootNav().setRoot(HomePage);
  }

}

