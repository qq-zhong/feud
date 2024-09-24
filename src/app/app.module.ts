import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    Game1Component,
    Game2Component,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
