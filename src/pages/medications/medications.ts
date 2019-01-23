import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddmedPage } from '../addmed/addmed';

/**
 * Generated class for the MedicationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medications',
  templateUrl: 'medications.html',
})
export class MedicationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicationsPage');
  }

openPage(){
  this.navCtrl.push(AddmedPage);
}


}
