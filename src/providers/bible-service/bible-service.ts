import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HomePage } from "../../pages/home/home";
import 'rxjs/add/operator/map';

@Injectable()
export class BibleServiceProvider {

  constructor(public http: Http) {
    console.log('Hello BibleServiceProvider Provider');
  }

  getBible() {
    let url = '/assets/lang/' + HomePage.language.getValue() + '.json';
    return this.http.get(url)
      .map(response => {
        return response.json();
    })
  }
}
