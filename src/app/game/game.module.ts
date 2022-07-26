import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { CardHandComponent } from './card-hand/card-hand.component';
import { CardStackComponent } from './card-stack/card-stack.component';
import { PlayersComponent } from './players/players.component';



@NgModule({
  declarations: [
    CardComponent,
    GameboardComponent,
    CardHandComponent,
    CardStackComponent,
    PlayersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GameboardComponent]
})
export class GameModule { }
