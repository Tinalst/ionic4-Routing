import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

    @Input('value') value;
    @Input('modalValue') modalValue;

    constructor() { }

    ngOnInit() {
        console.log(this.value);
        console.log(this.modalValue);
        this.alterMeg();
    }

    alterMeg = () => {
        (this.value && this.modalValue) && window.alert(`${this.value}<br/>${this.modalValue}`);
    }

}
