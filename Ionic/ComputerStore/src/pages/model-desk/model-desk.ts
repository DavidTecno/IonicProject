import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, App} from 'ionic-angular';

/**
 * Generated class for the ModelDeskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-model-desk',
  templateUrl: 'model-desk.html',
})
export class ModelDeskPage {
  myname;
  mycore;
  mymodel;
  myprice;
  myproc;
  mygraphic;
  myram;
  myspeed;
  mylector;

  goBack(){
    this.app.goBack();
  }

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelDeskPage');
  }

  dismiss() {    
    let data = { 
      model: this.mymodel,
      name: this.myname,
      price: this.myprice+"€",
      core: this.mycore,
      procesador: this.myproc,
      speed: this.myspeed,
      ram: this.myram+"GB",
      graphicCardMode: this.mygraphic,
      lector: this.mylector };
    this.viewCtrl.dismiss(data);
  }
  

}
