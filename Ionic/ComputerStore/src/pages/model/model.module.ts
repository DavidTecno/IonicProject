import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModelLaptopAdd } from './model';

@NgModule({
  declarations: [
    ModelLaptopAdd,
  ],
  imports: [
    IonicPageModule.forChild(ModelLaptopAdd),
  ],
})
export class ModelPageModule {}
