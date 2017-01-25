import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})
export class VideoPage {

  videos: any;
  url: any;
  
  loading: any;

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {

    this.getFeed();
  }
  
  public getFeed( ){

    this.presentLoading();

    this.url = "http://www.narodnjak.si/feed.php";
    
    this.http.get(this.url).map(res => res.json()).subscribe(
      data => {
          this.videos = data.video;
          this.loading.dismiss();
      },
      err => {
          console.log("Napaka pri prenosu vsebine.");
          this.loading.dismiss();
      }
    );
  }


  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Poteka prenos vsebine ...'
    });

    this.loading.present();

  }

}
