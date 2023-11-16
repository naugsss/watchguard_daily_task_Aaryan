import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './parent-component/child-component/child-component.component';
import { HighlightDirective } from './app-highlight.directive';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    HighlightDirective,
  ],
  imports: [BrowserModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
