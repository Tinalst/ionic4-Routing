import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ItemPage} from '../item/item.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

    modal: any;

    constructor(public modalController: ModalController) {}

    async presentModal() {
         this.modal = await this.modalController.create({
            component: ItemPage,
            componentProps: {
                value: 123,
                modalValue: '我是模态框传来的数据'
            }
        });
        return await this.modal.present();
    }

    ngOnInit(): void {

    }

}
