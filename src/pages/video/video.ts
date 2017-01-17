import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})
export class VideoPage {

  videos: any;
  url: any;
  
  constructor(public navCtrl: NavController, public http: Http) {

    this.getFeed();
  }
  
  public getFeed( ){
    this.url = "http://www.narodnjak.si/feed.php";
    
    this.http.get(this.url).map(res => res.json()).subscribe(
      data => {
          this.videos = data.video;
          
      },
      err => {
          console.log("Oops!");
      }
    );
  }

}
