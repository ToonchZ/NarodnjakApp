import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the FbDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fb-details',
  templateUrl: 'fb-details.html'
})
export class FbDetailsPage {

  post: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
    console.log(this.post);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FbDetailsPage');
  }

}
