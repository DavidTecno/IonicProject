import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App){
  }

  goToApp(){
      //this.app.getRootNav().setRoot(TabsPage);
      this.navCtrl.push(TabsPage);
  }

}


