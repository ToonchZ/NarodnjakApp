import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, LoadingController } from 'ionic-angular';

import { NovicaDetailPage } from '../novica-detail/novica-detail';

import { Clanek } from '../../app/clanek';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  posts: Clanek[];
  url: any;
  
  loading: any;


  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {
    
    this.posts = [];
    this.presentLoading();
    
    this.getFeed(0);
  }
  
  public getFeed( limitFrom: number ){

    this.url = "http://www.narodnjak.si/feed/clanki/" + limitFrom;
    
    this.http.get(this.url)
    .map(res => res.json())
    .subscribe(
      data => {
        this.posts = this.posts.concat(data.novice);
        this.loading.dismiss();

        //console.log(this.posts);
      },
      err => {
        console.log("Napaka pri prenosu vsebine.");
        console.log("Napaka pri prenosu vsebine.");
        this.loading.dismiss();
      }
    );
  }

  public loadMorePosts(infiniteScroll){
      
      let n = this.posts.length;

      this.url = "http://www.narodnjak.si/feed/clanki/" + n;
    
      this.http.get(this.url)
      .map(res => res.json())
      .subscribe(
        data => {
          this.posts = this.posts.concat(data.novice);
          infiniteScroll.complete();
        },
        err => {
          console.log("Napaka pri prenosu vsebine.");
          console.log("Napaka pri prenosu vsebine.");
          infiniteScroll.complete();
        }
      );
      /*
      setTimeout(() => {
        this.getFeed(n);
        infiniteScroll.complete();
      }, 1000); */
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
