import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent implements OnInit {

  @Input() n1: string;
  @Input() n2: string;
  //Input() é sempre string.

  constructor() { }

  ngOnInit() {
  }

  getSum(){
    return Number(this.n1) + Number(this.n2);
  }

}