import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';
import {templateJitUrl} from '@angular/compiler';

@Directive({
    selector: '[appTouchDrag]',
})
export class TouchDragDirective {

    // 获取父容器的宽度
    @Input('pWidth') pWidth: number;
    @Input('pHeight') pHeight: number;

    disX: any;
    disY: any;
    oWidth: any;
    oHeight: any;

    constructor(private obj: ElementRef, private render: Renderer2) {

    }

    @HostListener('touchstart', ['$event'])
    tochStartFun(event: Event): void {
        console.log(this.pWidth);
        console.log(this.pHeight);
        console.log('touchstart', event);
        if (event['touches']['length'] === 1) {
            event.preventDefault();
        }

        // 当前dom元素上手指的列表，尽量使用这个代替touches
         const touch = event['targetTouches'][0];

        // 手指指向浏览器|| 客户端页面的水平坐标 - 元素的水平偏移位置
         this.disX = touch.clientX - this.obj.nativeElement.offsetLeft;

        // 手指指向浏览器 || 客户端页面的垂直坐标 = 元素的垂直偏移位置
         this.disY = touch.clientY - this.obj.nativeElement.offsetTop;

        // 返回OBJ的元素宽度
         this.oWidth = this.obj.nativeElement.offsetWidth;

        // 返回OBJ的元素的高度
         this.oHeight = this.obj.nativeElement.offsetHeight;

    }

    @HostListener('touchmove', ['$event'])
    touchMoveFun(event: Event): void {
        this.pHeight = this.obj.nativeElement.parentElement.clientHeight;
        this.pWidth = this.obj.nativeElement.parentElement.clientWidth;
        // console.log(this.obj.nativeElement.parentElement.clientHeight);
        // console.log('touchmove', event);
        const touch = event['targetTouches'][0];
        this.obj.nativeElement.style.left = touch.clientX - this.disX + 'px';
        this.obj.nativeElement.style.top = touch.clientY - this.disY + 'px';
        // console.log(this.obj.nativeElement.style.left);

        // 左侧
        if (this.obj.nativeElement.offsetLeft <= 0) {

            this.obj.nativeElement.style.left = 0 + 'px';
        }

        // 右侧
        if (this.obj.nativeElement.offsetLeft >= this.pWidth - this.oWidth) {
            this.obj.nativeElement.style.left = this.pWidth - this.oWidth + 'px';
        }

        // 上面
        if (this.obj.nativeElement.offsetTop <= 0) {
            this.obj.nativeElement.style.top = 0 + 'px';
        }

        // 下面
        if (this.obj.nativeElement.offsetTop >= this.pHeight - this.oHeight) {
            this.obj.nativeElement.style.top = this.pHeight - this.oHeight + 'px';
        }
    }

}
