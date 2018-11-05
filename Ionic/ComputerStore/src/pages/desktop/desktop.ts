import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, Slides } from 'ionic-angular';
import { DesktopService } from '../../providers/computer-service/computer-service';

class Desktop {
  model: string;
  name: string;
  price: string;
  core: number;
  procesador: string;
  speed: string;
  ram: string;
  lector: string;
  idDesktop: number;
  graphicCardMode: string;
}

@Component({
  selector: 'page-desktop',
  templateUrl: 'desktop.html'
})
export class DesktopPage {

  public oneDesktop: Desktop = {
    model: 'null',
    name: 'null',
    price: 'null',
    core: 0,
    procesador: 'null',
    speed: 'null',
    ram: 'null',
    lector: 'null',
    idDesktop: 0,
    graphicCardMode: 'null'
  };
  @ViewChild("slides") slide: Slides;
  i: number = 1;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public deskServ: DesktopService) {


  }

  presentAddModalDesk() {
    const addModal = this.modalCtrl.create("ModelDeskPage");
    addModal.onDidDismiss(dataAdd => {
      console.log(dataAdd);
      this.deskServ.addDesktop(dataAdd).subscribe(data=>{
        dataAdd = data;
        console.log(data);
       }, error => {
        console.log(error);
      })
    });
    addModal.present();
  }

  editModalDesk(){
    const editModal = this.modalCtrl.create("ModelDeskPage");
    editModal.onDidDismiss(dataAdd => {
      console.log(dataAdd);
      this.deskServ.updateDesktop(this.i, dataAdd).subscribe(data=>{
        dataAdd = data;
        console.log(data);
       }, error => {
        console.log(error);
      })
    });
    editModal.present();
  }
  
 
  removeModelDesk(){
    this.deskServ.removeDesktop(this.i).subscribe(data =>{
      console.log(data);
    }, error => {
      console.log(error);
      
    })
  }

  chargeDesktop() {
    console.log(this.slide.getActiveIndex);
    
    switch (this.slide.getActiveIndex()) {
      case 0:

        this.i = 1;
        break;
      case 1:

        this.i = 2;
        break;
      case 2:

        this.i = 3;
        break;
      case 3:

        this.i = 4;
        break;
      case 4:

        this.i = 5;
        break;
      case 5:

        this.i = 6;
        break;
      case 6:

        this.i = 7;
        break;
    }

    this.deskServ.getOneDesktop(this.i).subscribe(
      desktop => {
        this.oneDesktop = desktop;
      }, error => {
        this.oneDesktop = {
          model: 'null',
          name: 'null',
          price: 'null',
          core: 0,
          procesador: 'null',
          speed: 'null',
          ram: 'null',
          lector: 'null',
          idDesktop: 0,
          graphicCardMode: 'null'
        };
        console.log(error);
      });


  }

  


  ionViewDidLoad() {

    this.chargeDesktop();

  }

}

