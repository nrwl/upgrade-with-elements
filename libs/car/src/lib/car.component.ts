import { Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  template: `<button (click)="buy()">Buy</button> 
             <span class="car">{{ name }}</span>
             <span class="status">{{ status }}</span>`,
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() name: string;
  status: string;

  constructor(private cd: ChangeDetectorRef) {}

  buy() {
    this.status = 'sold';
    this.cd.detectChanges();
  }
}
