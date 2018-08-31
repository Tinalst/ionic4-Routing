import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {AboutPopoverComponent} from '../about-popover/about-popover.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
    constructor(public popoverController: PopoverController) {}

    async presentPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: AboutPopoverComponent,
            event: event,            // 是否有三角形配置
            translucent: true,

        });
        return await popover.present();
    }

    async presentNoEventPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: AboutPopoverComponent,
            translucent: true,
        });
        return await popover.present();
    }
    ngOnInit() {
     }

}
