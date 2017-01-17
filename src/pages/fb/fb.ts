import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-fb',
  templateUrl: 'fb.html'
})
export class FBPage {

  posts: any;
  url: any;
  
  constructor(public navCtrl: NavController, public http: Http) {
    

    this.getFeed();
  }
  
  public getFeed( ){
  
    this.url = "https://graph.facebook.com/113972852370/posts/?fields=name,message,description,created_time,picture,full_picture,icon,message_tags,link&limit=10&access_token=477242935760413|5477606347c46de96ed4174901b6ea57";
    
    this.http.get(this.url).map(res => res.json()).subscribe(
      data => {
          this.posts = data.data;
          
      },
      err => {
          console.log("Oops!");
      }
    );
  }

}
