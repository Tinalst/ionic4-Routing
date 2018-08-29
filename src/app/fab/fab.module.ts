import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FabPage } from './fab.page';
import {DragComponentComponent} from '../component/drag-component/drag-component.component';
import {FloatFabComponent} from '../component/float-fab/float-fab.component';
import {TouchDragDirective} from '../directive/touch-drag.directive';
import {GetSizeDirective} from '../directive/get-size.directive';

const routes: Routes = [
  {
    path: '',
    component: FabPage
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
      FabPage,
      DragComponentComponent,
      FloatFabComponent,
      TouchDragDirective,
      GetSizeDirective
  ]
})
export class FabPageModule {}
