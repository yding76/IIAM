import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { MedicationsPage } from '../medications/medications';
import { AddmedPage } from '../addmed/addmed';
import { TrachPage } from '../trach/trach';
import { WhiteboardPage } from '../whiteboard/whiteboard'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];

  constructor(public navCtrl: NavController) {
    this.items = [];
    this.items.push({
      text: 'About Me',
      icon: 'happy',
      color: '#BC254B',
      id: 0
    });

    this.items.push({
      text: 'About My Tracheostomy',
      icon: 'body',
      color: '#BC254B',
      id: 1
    });

    this.items.push({
      text: 'Care',
      icon: 'heart',
      color: '#BC254B',
      id: 2
    });

    this.items.push({
      text: 'Assistance',
      icon: 'hand',
      color: '#BC254B',
      id: 3
    });

    this.items.push({
      text: 'Documents',
      icon: 'list-box',
      color: '#BC254B',
      id: 4
    });

    this.items.push({
      text: 'Medical',
      icon: 'clipboard',
      color: '#BC254B',
      id: 5
    });

    this.items.push({
      text: 'Medications',
      icon: 'medkit',
      color: '#BC254B',
      id: 6
    });

    this.items.push({
      text: 'Contacts',
      icon: 'people',
      color: '#BC254B',
      id: 7
    });

    this.items.push({
      text: 'View Summary',
      icon: 'locate',
      color: '#BC254B',
      id: 8
    });

    this.items.push({
      text: 'Whiteboard',
      icon: 'brush',
      color: '#BC254B',
      id: 9
    });

  }

  itemSelected(item) {

    if (item.id == 0){

    }

    if (item.id == 1){
      this.navCtrl.push(TrachPage, {item: item});
    }

    if (item.id == 2){

    }

    if (item.id == 3){

    }

    if (item.id == 4){

    }

    if (item.id == 5){

    }
    if (item.id == 6){
      this.navCtrl.push(MedicationsPage, {item: item});
    }

    if (item.id == 7){

    }

    if (item.id == 8){

    }

    if (item.id == 9){
      this.navCtrl.push(WhiteboardPage, {item:item});
    }


  }

}
