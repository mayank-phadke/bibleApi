import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-book-select',
  templateUrl: 'book-select.html',
})
export class BookSelectPage {

  shownGroup = null;
  books: any;
  bible: any;
  bookNo;
  chapterNo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    HomePage.bibleData.subscribe(data => {
      if(data != null) {
        this.books = data.Books;
        this.bible = data;        
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookSelectPage');
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
    HomePage.bookNo.next(group);
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };

  chapterClick(chapterNo) {
    HomePage.chapterNo.next(chapterNo);
    this.navCtrl.pop();
  }
}
