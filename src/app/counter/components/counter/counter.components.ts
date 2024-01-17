import { Component } from '@angular/core';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button> `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value; //cada vez que se haga click en el boton +1, se incrementara +1 a counter
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
