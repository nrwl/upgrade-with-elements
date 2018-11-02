import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CarComponent } from './car.component';
import { CarModule } from './car.module';

@NgModule({
  imports: [BrowserModule, CarModule],
  entryComponents: [CarComponent]
})
export class CarWrapperModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(CarComponent, {
      injector: this.injector
    });
    customElements.define('car-element', customButton);
  }

  ngDoBootstrap() {}
}
