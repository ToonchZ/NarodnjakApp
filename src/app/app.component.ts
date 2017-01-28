import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen, Push } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import {DetailsPage} from "../pages/details/details";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;
 
  constructor(platform: Platform, public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      
      // ----------- youtube video api
      var tag = document.createElement('script');

      // ---------| PUSH Notifications (comment on ) |--------------------------------------------
      
      var push = Push.init({
        android: {
          senderID: "736255385820"
        },
        ios: {
          alert: "true",
          badge: false,
          sound: "true"
        },
        windows: {}
      });

      push.on('registration', (data) => {
        if (data) {
          console.log(data.registrationId);
        } else {
          console.log('No data returned.');
        }
      });
      push.on('notification', (data) => {
        console.log('message', data.message);
        
        //if user using app and push notification comes
        if (data.additionalData.foreground) {
          // if application open, show popup
          let confirmAlert = this.alertCtrl.create({
            title: 'Novo obvestilo',
            message: data.message,
            buttons: [{
              text: 'Prezri',
              role: 'cancel'
            }, {
              text: 'Pokaži',
              handler: () => {
                //TODO: Your logic here
                this.nav.push(DetailsPage, {message: data.message});
              }
            }]
          });
          confirmAlert.present();
        } else {
          //if user NOT using app and push notification comes
          //TODO: Your logic on click of push notification directly
          this.nav.push(DetailsPage, {message: data.message});
          console.log("Push notification clicked");
        }
      });
      push.on('error', (e) => {
        console.log(e.message);
      }); 
      
      // --------------------------------------------
    });
  }
}
