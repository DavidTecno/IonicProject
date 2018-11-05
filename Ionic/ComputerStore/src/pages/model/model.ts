import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, App} from 'ionic-angular';

/**
 * Generated class for the ModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-model',
  templateUrl: 'model.html',
})
export class ModelLaptopAdd {
  myname;
  mycore;
  mymodel;
  myprice;
  myproc;
  mygraphic;
  mybattery;
  myram;
  myspeed;
  myscreen;

  goBack(){
    this.app.goBack();
  }

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelAdd');
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
      screenFormat: this.myscreen,
      batteryCells: this.mybattery };
    this.viewCtrl.dismiss(data);
  }
  

}
