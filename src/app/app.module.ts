import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CounterComponent } from './components/counter/counter.component';
import { AdderComponent } from './components/adder/adder.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CounterComponent, AdderComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
