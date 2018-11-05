import { Component } from '@angular/core';

import { DesktopPage } from '../desktop/desktop';
import { LaptopPage } from '../laptop/laptop';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LaptopPage;
  tab2Root = DesktopPage;

  constructor() {
    
  }
}
