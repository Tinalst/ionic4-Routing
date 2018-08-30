import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyload-img',
  templateUrl: './lazyload-img.page.html',
  styleUrls: ['./lazyload-img.page.scss'],
})
export class LazyloadImgPage {
    items: any[] = [
        { src: '../../assets/images/avatar.png'},
        { src: '../../assets/images/avatar.png'},
        { src: '../../assets/images/avatar.png'},
        { src: '../../assets/images/avatar.png'},
        { src: '../../assets/images/avatar.png'},
        { src: '../../assets/images/avatar.png'},
        { src: '../../assets/images/avatar.png'},
        { src: '../../assets/images/avatar.png'},
        { src: '../../assets/images/avatar.png'},
        { src: '../../assets/images/avatar.png'},
        { src: '../../assets/images/avatar.png'},
        { src: '../../assets/images/avatar.png'},
    ];
}
