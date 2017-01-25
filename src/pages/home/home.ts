import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, LoadingController } from 'ionic-angular';

import { NovicaDetailPage } from '../novica-detail/novica-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  posts: any;
  url: any;
  
  loading: any;

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {
    
    this.presentLoading();
    
    this.getFeed();
  }
  
  public getFeed( ){

    this.url = "http://www.narodnjak.si/feed.php";
    
    this.http.get(this.url).map(res => res.json()).subscribe(
      data => {
          this.posts = data.novice;
          this.loading.dismiss();
      },
      err => {
          console.log("Napaka pri prenosu vsebine.");
          this.loading.dismiss();
      }
    );
  }

  public itemSelected(novica){
    this.navCtrl.push(NovicaDetailPage, {novica});
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Poteka prenos vsebine ...'
    });

    this.loading.present();

  }

}
