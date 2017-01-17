import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FBPage } from '../pages/fb/fb';
import { VideoPage } from '../pages/video/video';
import { HomePage } from '../pages/home/home';
import { NovicaDetailPage } from '../pages/novica-detail/novica-detail';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    FBPage,
    VideoPage,
    HomePage,
    NovicaDetailPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FBPage,
    VideoPage,
    HomePage,
    NovicaDetailPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
