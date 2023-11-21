import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomecomponentComponent, DisplayDataComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
