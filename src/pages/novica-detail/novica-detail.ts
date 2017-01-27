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
  track: any;

  showPlayer: boolean = false;
  trackDuration: number;
  trackProgress: number;
  trackStatus: number;
  playing: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.novica = navParams.get('novica');
    this.trackProgress = 0;
    this.trackDuration = 0;
    this.trackStatus = 0;


    if(this.novica.mp3 != ''){
      const onStatusUpdate = (status) => this.trackStatus = status;
    
      this.track = new MediaPlugin(this.novica.mp3, onStatusUpdate);

      this.track.init.then(() => {
        this.trackProgress = 0;
        clearInterval(this.playing);
      }, (err) => {
        alert('Napaka pri predvajanju. (' + err.code + ': ' + err.message + ')');
      });

      this.showPlayer = true;
      this.trackStatus = this.track.status;
      
      this.trackDuration = this.track.getDuration();
    }
  }

  play(){

    if(this.trackStatus == 1 || this.trackStatus == 2){
      return;
    }

    this.track.play();
    
    this.playing = setInterval(()=> {
      this.updateSlider();
    }, 1000);
  }

  pause(){
    // posnetek ustavi samo če se predvaja
    if(this.trackStatus != 2){
      return;
    }
    this.track.pause();
    clearInterval(this.playing);
  }

  seek(){

    this.track.seekTo(this.trackProgress*1000);
  }

  updateSlider(){

    if(this.trackDuration == -1){
      this.trackDuration = this.track.getDuration();
    }

    this.track.getCurrentPosition().then((position) => {
      this.trackProgress = position;
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NovicaDetailPage');
  }

  ionViewWillLeave() {
    
    if(this.trackStatus > 0){
      this.track.stop();
      this.track.release();
      console.log('audio released.');
    }
    else{

      console.log('ni audio posnetka.');
    }
  }
  
}

