import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookSelectPage } from './book-select';

@NgModule({
  declarations: [
    BookSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(BookSelectPage),
  ],
})
export class BookSelectPageModule {}
