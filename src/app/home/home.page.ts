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
  }
}

