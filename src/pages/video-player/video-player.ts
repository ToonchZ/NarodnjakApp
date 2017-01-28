import { Component } from '@angular/core';
import { NavController, NavParams, ViewController  } from 'ionic-angular';

/*
  Generated class for the VideoPlayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html'
})
export class VideoPlayerPage {

  video: any;
  tabBarElement: any;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {

    this.video = navParams.get('video');
  }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPlayerPage');
  }

}
