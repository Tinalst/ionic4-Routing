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
  { path: 'lazyloadImg', loadChildren: './lazyload-img/lazyload-img.module#LazyloadImgPageModule' },
  { path: 'infiniteScroll', loadChildren: './infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
  { path: 'input', loadChildren: './input/input.module#InputPageModule' },
  { path: 'item', loadChildren: './item/item.module#ItemPageModule' },
  { path: 'itemdivider', loadChildren: './item-divider/item-divider.module#ItemDividerPageModule' },
  { path: 'itemsliding', loadChildren: './item-sliding/item-sliding.module#ItemSlidingPageModule' },
  { path: 'label', loadChildren: './label/label.module#LabelPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'loading', loadChildren: './loading/loading.module#LoadingPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'nav', loadChildren: './nav/nav/nav.module#NavPageModule' },
  { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' },
  { path: 'radio', loadChildren: './radio/radio.module#RadioPageModule' },
  { path: 'range', loadChildren: './range/range.module#RangePageModule' },
  { path: 'refresher', loadChildren: './refresher/refresher.module#RefresherPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
