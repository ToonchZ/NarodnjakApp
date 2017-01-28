import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FBPage } from '../pages/fb/fb';
import { FbDetailsPage } from '../pages/fb-details/fb-details';
import { VideoPage } from '../pages/video/video';
import { VideoPlayerPage } from '../pages/video-player/video-player';
import { HomePage } from '../pages/home/home';
import { NovicaDetailPage } from '../pages/novica-detail/novica-detail';

import { TabsPage } from '../pages/tabs/tabs';

import { Safe } from '../pipes/safe';

@NgModule({
  declarations: [
    MyApp,
    FBPage,
    FbDetailsPage,
    VideoPage,
    VideoPlayerPage,
    HomePage,
    NovicaDetailPage,
    TabsPage,
    Safe
  ],
  imports: [
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FBPage,
    FbDetailsPage,
    VideoPage,
    VideoPlayerPage,
    HomePage,
    NovicaDetailPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
