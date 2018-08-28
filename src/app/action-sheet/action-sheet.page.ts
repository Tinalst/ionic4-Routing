import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage  {
    actionSheet: any;

    constructor(public actionSheetController: ActionSheetController) {}

    async presentActionSheet() {
       this.actionSheet = await this.actionSheetController.create({
            header: 'test',           // 正标题
            subHeader: 'sub',         // 副标题
            backdropDismiss: true,    // 点击弹出框外的地方是否关掉弹出框
            buttons: [{
                text: 'Delete',
                role: 'destructive',
                icon: 'trash',
                handler: () => {
                    console.log('Delete clicked');
                }
            }, {
                text: 'Share',
                icon: 'share',
                handler: () => {
                    console.log('Share clicked');
                }
            }, {
                text: 'Play (open modal)',
                icon: 'arrow-dropright-circle',
                handler: () => {
                    console.log('Play clicked');
                }
            }, {
                text: 'Favorite',
                icon: 'heart',
                handler: () => {
                    console.log('Favorite clicked');
                }
            }, {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]

        });
        await this.actionSheet.present();
    }


}
