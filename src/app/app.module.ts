import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from "../pages/home/home";
import { LanguagePopupPage } from "../pages/language-popup/language-popup";
import { BookSelectPage } from "../pages/book-select/book-select";
import { BibleServiceProvider } from '../providers/bible-service/bible-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LanguagePopupPage,
    BookSelectPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LanguagePopupPage,
    BookSelectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BibleServiceProvider,
  ]
})
export class AppModule {}
