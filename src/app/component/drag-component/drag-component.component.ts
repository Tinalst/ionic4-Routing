import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-component',
  templateUrl: './drag-component.component.html',
  styleUrls: ['./drag-component.component.scss']
})
export class DragComponentComponent implements OnInit {
    inBounds = true;
    edge = {
        top: true,
        bottom: true,
        left: true,
        right: true
    };

    constructor() { }

    ngOnInit() {
    }

    checkEdge(event) {
        this.edge = event;
        console.log('edge:', event);
    }


}
