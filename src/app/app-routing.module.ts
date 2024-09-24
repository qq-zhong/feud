import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Game1Component } from './game1/game1.component'; //added
import { Game2Component } from './game2/game2.component'; //added
import { MainComponent } from './main/main.component';


// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'game1', component: Game1Component },
  { path: 'game2', component: Game2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
