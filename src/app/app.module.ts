import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { MainComponent } from './main/main.component';
import { Game3Component } from './game3/game3.component';
import { Game4Component } from './game4/game4.component';
import { Game5Component } from './game5/game5.component';
import { Game6Component } from './game6/game6.component';
import { Game7Component } from './game7/game7.component';
import { Game8Component } from './game8/game8.component';

@NgModule({
  declarations: [
    AppComponent,
    Game1Component,
    Game2Component,
    MainComponent,
    Game3Component,
    Game4Component,
    Game5Component,
    Game6Component,
    Game7Component,
    Game8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
