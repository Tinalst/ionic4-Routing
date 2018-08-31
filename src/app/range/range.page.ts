import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
})
export class RangePage implements OnInit {
    defaultValue: number = 10;
    constructor() { }

    ngOnInit() {
    }

    increate = () => {
        window.setTimeout(() => {
            (this.defaultValue < 100) && this.defaultValue++;
        }, 100);
    }
}
