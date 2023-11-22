import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { HomecomponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [AppComponent, HomecomponentComponent, DisplayDataComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
