import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, Slides, ViewController } from 'ionic-angular';
import { LaptopService } from '../../providers/computer-service/computer-service';

class Laptop {
  model: string;
  name: string;
  price: string;
  core: number;
  procesador: string;
  speed: string;
  ram: string;
  idLaptop: number;
  batteryCells: number;
  screenFormat: string;
  graphicCardMode: string;
}

@Component({
  selector: 'page-laptop',
  templateUrl: 'laptop.html'
})
export class LaptopPage {
  public laptops: Array<any>;
  public oneLaptop: Laptop = {
    model: 'null',
    name: 'null',
    price: 'null',
    core: 0,
    procesador: 'null',
    speed: 'null',
    ram: 'null',
    idLaptop: 0,
    batteryCells: 0,
    screenFormat: 'null',
    graphicCardMode: 'null'
  };
  @ViewChild("slides") slide: Slides;
  i: number = 1;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public viewCtrl: ViewController, 
  public lapServ: LaptopService) {


  }

  presentAddModalLap() {
    const addModal = this.modalCtrl.create("ModelLaptopAdd");
    addModal.onDidDismiss(dataAdd => {
      console.log(dataAdd);
      this.lapServ.addLaptop(dataAdd).subscribe(data=>{
        dataAdd = data;
        console.log(data);
       }, error => {
        console.log(error);
      })
    });
    addModal.present();
  }

  editModalLap(){
    const editModal = this.modalCtrl.create("ModelLaptopAdd");
    editModal.onDidDismiss(dataAdd => {
      console.log(dataAdd);
      this.lapServ.updateLaptop(this.i, dataAdd).subscribe(data=>{
        dataAdd = data;
        console.log(data);
       }, error => {
        console.log(error);
      })
    });
    editModal.present();
  }
 
  removeModelLap(){
    this.lapServ.removeLaptop(this.i).subscribe(data =>{
      console.log(data);
    }, error => {
      console.log(error);
      
    })
  }

  chargeLaptop() {

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

    this.lapServ.getOneLaptop(this.i).subscribe(
      laptop => {
        this.oneLaptop = laptop;
      }, error => {
        this.oneLaptop = {
          model: 'null',
          name: 'null',
          price: 'null',
          core: 0,
          procesador: 'null',
          speed: 'null',
          ram: 'null',
          idLaptop: 0,
          batteryCells: 0,
          screenFormat: 'null',
          graphicCardMode: 'null'
        };
        console.log(error);
      });


  }




  ionViewDidLoad() {

    this.chargeLaptop();

  }

}









