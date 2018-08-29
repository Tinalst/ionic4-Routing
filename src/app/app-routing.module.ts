import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'resposive-grid', loadChildren: './resposive-grid/resposive-grid.module#ResposiveGridPageModule' },
  { path: 'text', loadChildren: './text/text.module#TextPageModule' },
  { path: 'action-sheet', loadChildren: './action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'alter', loadChildren: './alter/alter.module#AlterPageModule' },
  { path: 'avatar', loadChildren: './avatar/avatar.module#AvatarPageModule' },
  { path: 'back-button', loadChildren: './back-button/back-button.module#BackButtonPageModule' },
  { path: 'backdrop', loadChildren: './backdrop/backdrop.module#BackdropPageModule' },
  { path: 'badge', loadChildren: './badge/badge.module#BadgePageModule' },
  { path: 'bytton', loadChildren: './bytton/bytton.module#ByttonPageModule' },
  { path: 'card', loadChildren: './card/card.module#CardPageModule' },
  { path: 'chip', loadChildren: './chip/chip.module#ChipPageModule' },
  { path: 'content', loadChildren: './content/content.module#ContentPageModule' },
  { path: 'fab', loadChildren: './fab/fab.module#FabPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
