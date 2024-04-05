import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

<button (click)="increaseBy(counter)">+1</button>
<button (click)="decreaseBy(counter)">-1</button>
<button (click)="reset()">reset</button>

  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  title = 'Mi primera app de Angular';
  public counter: number = 10;

increaseBy(value: number):void{
this.counter +=1;
}

decreaseBy(value: number):void{
  this.counter -=1;
  }

  reset():void{
    this.counter = 10;

    }
}
