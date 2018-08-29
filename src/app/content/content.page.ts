import { Component, OnInit } from '@angular/core';
import {logger} from '../../../node_modules/codelyzer/util/logger';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    ionScrollStart = (e): void => {

    }

    ionScroll = (e): void => {
        console.dir(e.detail);
    }

    ionScrollEnd = (e): void => {

    }

}
