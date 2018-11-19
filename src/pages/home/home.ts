import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public num: number = 0;
  constructor(public navCtrl: NavController) {

  }

   plus() {
       this.num++;
         }

	   minus() {
	       this.num--;
	         }

		   reset() {
		       this.num = 0;
		         }

}
