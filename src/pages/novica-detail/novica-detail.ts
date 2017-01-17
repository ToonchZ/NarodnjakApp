import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the NovicaDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-novica-detail',
  templateUrl: 'novica-detail.html'
})
export class NovicaDetailPage {

  novica: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.novica = navParams.get('novica');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovicaDetailPage');
  }

}
