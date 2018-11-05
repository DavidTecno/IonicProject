import { Component } from '@angular/core';
import { Platform, App, ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ConfigurationPage } from '../pages/configuration/configuration';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modCtrl: ModalController, 
    public app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });

    
  }

  closeApp(){
    this.platform.exitApp();
  }

  goToConfig(){
    this.app.getRootNav().setRoot(ConfigurationPage);
  }

  goBack(){
    
      this.app.goBack();
    
  }
  
}
