import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `


<h3>{{ counter }}</h3>
  <button (click)="increseBy(0)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increseBy(1)">-1</button>
  `
})

export class CounterComponent {

  public counter: number = 10;
  readonly constante: number  = 10;


  public increseBy(value: number): void{
    if(value == 0){
      this.counter += 1
    }
    if(value == 1){
      this.counter -= 1
    }
  }

  public reset(): void{
    this.counter = this.constante;

  }



}


