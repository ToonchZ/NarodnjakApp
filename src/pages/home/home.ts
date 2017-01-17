import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

import { NovicaDetailPage } from '../novica-detail/novica-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  posts: any;
  url: any;
  
  constructor(public navCtrl: NavController, public http: Http) {
    console.log("Call feed.");
    this.getFeed();
  }
  
  public getFeed( ){
    this.url = "http://www.narodnjak.si/feed.php";
    
    this.http.get(this.url).map(res => res.json()).subscribe(
      data => {
          this.posts = data.novice;
          
      },
      err => {
          console.log("Oops!");
      }
    );
  }

  public itemSelected(novica){
    this.navCtrl.push(NovicaDetailPage, {novica});
  }
}
