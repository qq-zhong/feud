import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Game1Component } from './game1/game1.component'; //added
import { Game2Component } from './game2/game2.component'; //added
import { MainComponent } from './main/main.component';
import { Game3Component } from './game3/game3.component';
import { Game5Component } from './game5/game5.component';
import { Game4Component } from './game4/game4.component';
import { Game6Component } from './game6/game6.component';
import { Game7Component } from './game7/game7.component';
import { Game8Component } from './game8/game8.component';


// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'game1', component: Game1Component },
  { path: 'game2', component: Game2Component },
  { path: 'game3', component: Game3Component },
  { path: 'game4', component: Game4Component },
  { path: 'game5', component: Game5Component },
  { path: 'game6', component: Game6Component },
  { path: 'game7', component: Game7Component },
  { path: 'game8', component: Game8Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
