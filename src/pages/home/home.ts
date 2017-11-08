import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Content, LoadingController } from 'ionic-angular';
import { LanguagePopupPage } from "../language-popup/language-popup";
import { BookSelectPage } from "../book-select/book-select";
import { BibleServiceProvider } from "../../providers/bible-service/bible-service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { SplashScreen } from '@ionic-native/splash-screen';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Content) content: Content;

  static language = new BehaviorSubject('english');
  static bookNo = new BehaviorSubject(0);
  static chapterNo = new BehaviorSubject(0);
  static bibleData = new BehaviorSubject(null);

  bookName: string;
  chapterNo = 0;
  chapter: any;
  next = true;
  prev = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public bibleService: BibleServiceProvider,
    public splashScreen: SplashScreen,
    loadingCtrl: LoadingController
  ) {
    HomePage.language.subscribe(lang => {
      let loading = loadingCtrl.create({
        enableBackdropDismiss: false,
        content: 'Loading'
      })
      loading.present();
      
      this.bibleService.getBible().subscribe((data) => {
        HomePage.bibleData.next(data);
        loading.dismiss();
      },
        error => {
          console.log(JSON.stringify(error));
        });
    })

    HomePage.bibleData.subscribe(data => {
      if (data != null) {
        this.bookName = data.Books[HomePage.bookNo.getValue()];
        this.chapter = data.Bible[HomePage.bookNo.getValue()].Chapter[HomePage.chapterNo.getValue()].Verse;
      }
    })

    HomePage.chapterNo.subscribe(chapNo => {
      if (HomePage.bibleData.getValue() != null) {
        this.bookName = HomePage.bibleData.getValue().Books[HomePage.bookNo.getValue()];
        this.chapter = HomePage.bibleData.getValue().Bible[HomePage.bookNo.getValue()].Chapter[chapNo].Verse;
        this.chapterNo = chapNo;

        this.prev = HomePage.bibleData.getValue().Bible[HomePage.bookNo.getValue()].Chapter[chapNo - 1] != null;
        this.next = HomePage.bibleData.getValue().Bible[HomePage.bookNo.getValue()].Chapter[chapNo + 1] != null;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  bookSelectClick(myEvent) {
    let popover = this.popoverCtrl.create(BookSelectPage);
    popover.present({
      ev: myEvent
    });
  }

  languageClick(myEvent) {
    let popover = this.popoverCtrl.create(LanguagePopupPage);
    popover.present({
      ev: myEvent
    });
  }

  changeChapter(action: string) {
    if (action == 'next')
      HomePage.chapterNo.next(HomePage.chapterNo.getValue() + 1)
    else
      HomePage.chapterNo.next(HomePage.chapterNo.getValue() - 1)

    this.content.scrollToTop();
  }
}