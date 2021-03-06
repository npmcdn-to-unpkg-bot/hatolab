import { Component, ElementRef } from '@angular/core';
let p5 = require('p5');

@Component({
    selector: 'hato-app',
    template: ''
})
export class HatoComponent {
    private element: any

    constructor(elRef: ElementRef) {
        this.element = elRef.nativeElement
    }

    ngOnInit(elRef: ElementRef) {
        let app = new p5(this.sketch, this.element)
    }

    sketch(p: any) {
        p.setup = function() {
            p.createCanvas(window.innerWidth, window.innerHeight)
            p.background(0)
            p.noStroke()
        }
        p.draw = function() {
            p.fill(255)
            p.line(255)
            p.ellipse(p.mouseX, p.mouseY, 5, 5)
            p.background(0, 10)
        }
    }
}