import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
      private router: Router
  ) {}

  jumper = (num: number) => {
      (num === 1) && this.router.navigate(['./resposive-grid'], {queryParams: {id: 1}});
      (num === 2) && this.router.navigate(['./text'], {queryParams: {id: 2}});
      (num === 3) && this.router.navigate(['./action-sheet'], {queryParams: {id: 2}});
      (num === 4) && this.router.navigate(['./alter'], {queryParams: {id: 2}});
      (num === 5) && this.router.navigate(['./avatar'], {queryParams: {id: 2}});
      (num === 6) && this.router.navigate(['./back-button'], {queryParams: {id: 2}});
      (num === 7) && this.router.navigate(['./backdrop'], {queryParams: {id: 2}});
      (num === 8) && this.router.navigate(['./badge'], {queryParams: {id: 2}});
      (num === 9) && this.router.navigate(['./bytton'], {queryParams: {id: 2}});
      (num === 10) && this.router.navigate(['./card'], {queryParams: {id: 2}});
      (num === 11) && this.router.navigate(['./chip'], {queryParams: {id: 2}});
      (num === 12) && this.router.navigate(['./content'], {queryParams: {id: 2}});
      (num === 13) && this.router.navigate(['./fab'], {queryParams: {id: 2}});
      (num === 14) && this.router.navigate(['./lazyloadImg'], {queryParams: {id: 2}});
      (num === 15) && this.router.navigate(['./infiniteScroll'], {queryParams: {id: 2}});
      (num === 16) && this.router.navigate(['./input'], {queryParams: {id: 2}});
      (num === 17) && this.router.navigate(['./item'], {queryParams: {id: 2}});
      (num === 18) && this.router.navigate(['./itemdivider'], {queryParams: {id: 2}});
      (num === 19) && this.router.navigate(['./itemsliding'], {queryParams: {id: 2}});
      (num === 20) && this.router.navigate(['./label'], {queryParams: {id: 2}});
      (num === 21) && this.router.navigate(['./list'], {queryParams: {id: 2}});


  }
}


