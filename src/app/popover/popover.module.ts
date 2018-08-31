import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopoverPage } from './popover.page';
import {ItemPage} from '../item/item.page';
import {ListPage} from '../list/list.page';
import {AboutPopoverComponent} from '../about-popover/about-popover.component';

const routes: Routes = [
  {
    path: '',
    component: PopoverPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        PopoverPage,
        AboutPopoverComponent
    ],
    entryComponents: [
        AboutPopoverComponent
    ]
})
export class PopoverPageModule {}
