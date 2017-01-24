import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {NativeAudio} from 'ionic-native';

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
  mp3: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.novica = navParams.get('novica');
    this.mp3 = "http://www.narodnjak.si/priponke/6557/Me_tri_do_polnoci___Nasmeh_ne_gre_nikoli_iz_mode.mp3";
  }

  play(){
    // NativeAudio.preloadSimple('uniqueId1', this.mp3).then(function(msg){}, function(msg){ console.log(msg);});
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NovicaDetailPage');
  }

}
