import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResposiveGridPage } from './resposive-grid.page';

const routes: Routes = [
  {
    path: '',
    component: ResposiveGridPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResposiveGridPage]
})
export class ResposiveGridPageModule {}
