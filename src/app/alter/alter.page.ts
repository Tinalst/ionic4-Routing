import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {from, of} from 'rxjs';

@Component({
  selector: 'app-alter',
  templateUrl: './alter.page.html',
  styleUrls: ['./alter.page.scss'],
})
export class AlterPage implements OnInit {

    constructor(private alertController: AlertController) { }

    ngOnInit() {
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            mode: '11111111111',
            buttons: ['OK']
        });
        await console.log(alert);
        await alert.present();
    }

    // presentAlert() {
        // this.alertController.create({
        //     header: 'Alert',
        //     subHeader: 'Subtitle',
        //     message: 'This is an alert message.',
        //     buttons: ['OK']
        // }).then(v => {
        //     v.present();
        // });

        // from(this.alertController.create({
        //     header: 'Alert',
        //     subHeader: 'Subtitle',
        //     message: 'This is an alert message.',
        //     buttons: ['OK']
        // })).subscribe((v: any) => {
        //     v.present();
        // });
    // }
}
