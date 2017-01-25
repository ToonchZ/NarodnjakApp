import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MediaPlugin } from 'ionic-native';

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
  player: any;
  showPlayer: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.novica = navParams.get('novica');
    
    if(this.novica.mp3 != ''){
      const onStatusUpdate = (status) => console.log(status);
    
      this.player = new MediaPlugin(this.novica.mp3, onStatusUpdate);
      this.showPlayer = true;
    }
  }

  play(){
    this.player.play();
  }

  pause(){
    this.player.pause();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovicaDetailPage');
  }

}

