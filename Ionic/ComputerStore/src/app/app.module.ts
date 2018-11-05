import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DesktopPage } from '../pages/desktop/desktop';
import { LaptopPage } from '../pages/laptop/laptop';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ConfigurationPage } from '../pages/configuration/configuration';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LaptopService } from '../providers/computer-service/computer-service';
import { DesktopService } from '../providers/computer-service/computer-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    DesktopPage,
    LaptopPage,
    HomePage,
    TabsPage,
    ConfigurationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DesktopPage,
    LaptopPage,
    HomePage,
    TabsPage,
    ConfigurationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LaptopService, 
    DesktopService
  ]
})
export class AppModule {}
