import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-float-fab',
  template: `
      <style>
          #parent {
            
              position: relative;
          }
          #obj {
              width: 50px;
              height: 50px;
              background-color: coral;
              border-radius: 50%;
              position: absolute;
              z-index: 1000;
          }
      </style>
      <div id="parent" #parent appGetSize>
          <div id="obj" #obj appTouchDrag [pHeight]="pHeight" [pWidth]="pWidth"></div>
      </div>`
})
export class FloatFabComponent implements OnInit {

    @ViewChild('parent') parent: ElementRef;
    pHeight: any ;
    pWidth: any ;

    constructor() { }

    ngOnInit() {
    }
}
