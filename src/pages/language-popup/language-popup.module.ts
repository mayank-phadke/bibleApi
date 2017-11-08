import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LanguagePopupPage } from './language-popup';

@NgModule({
  declarations: [
    LanguagePopupPage,
  ],
  imports: [
    IonicPageModule.forChild(LanguagePopupPage),
  ],
})
export class LanguagePopupPageModule {}
