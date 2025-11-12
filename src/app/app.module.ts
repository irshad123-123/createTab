import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabNgIfComponent } from './tab-ng-if/tab-ng-if.component';
import { TabNgForComponent } from './tab-ng-for/tab-ng-for.component';
import { TabNgSwitchComponent } from './tab-ng-switch/tab-ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TabNgIfComponent,
    TabNgForComponent,
    TabNgSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
