import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';

const routes: Routes = [{
  path: 'start',
  component: StartPageComponent
}, {
  path: 'game/:id',
  component: GamePageComponent
}, {
  path: '**',
  redirectTo: 'start'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
