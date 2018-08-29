import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGetSize]'
})
export class GetSizeDirective implements OnInit {

    constructor(private render: Renderer2, private el: ElementRef) {}

    ngOnInit(): void {
        this.render.setStyle(this.el.nativeElement, 'width', '100%');
        this.render.setStyle(this.el.nativeElement, 'height', '50%');
        // this.render.setStyle(this.el.nativeElement, 'border')
    }

}
