import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

    loading: any;

    constructor(public lLoadingController: LoadingController) { }

    ngOnInit() {
    }

    async presentloading() {
        const loading = await this.lLoadingController.create({
            content: 'helllll',
            duration: 1000
        });
        return await  loading.present().then(() => {
            loading.dismiss();
        });
    }

    init(): void {
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
        this.startCreate();
    }

    startCreate = () => {
        let i = 0;
        setInterval(() => {
            i++;
            if (i === 10) {
                return;
            }
            this.presentCunstomLoading();
        }, 1000);
    }

    async  presentCunstomLoading() {
        this.loading = await this.lLoadingController.create({
            // spinner: 'hide',
            duration: 1000,
            // content: 'Please wait...',
            // translucent: true,
            // cssClass: 'custom-class',
            showBackdrop: false
        });

        await this.loading.present();
        // setTimeout(() => {
        //     this.loading.dismiss();
        // }, 1000);

    }
}
