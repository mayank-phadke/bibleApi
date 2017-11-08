import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-language-popup',
  templateUrl: 'language-popup.html',
})
export class LanguagePopupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagePopupPage');
  }

  changeLanguage(language: string) {
    HomePage.language.next(language);
    console.log(language);
    this.navCtrl.pop();
  }
}
