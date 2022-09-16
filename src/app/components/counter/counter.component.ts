import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() name: string;

  private counter: number = 0;

  constructor() {}

  ngOnInit() {}

  getCounter(){
    return this.counter;

    //para se referir à uma variavel externa do método, usa-se this.
  }

  increment(){
    this.counter++;
  }
}