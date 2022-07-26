import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  selectedCard!: number | null;
  connections: number[][] = [];

  players$ = this.gameService.paylers$;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  selectCard(idx: number) {
    this.selectedCard = idx;
  }

  selectStack(idx: number) {
    if (this.selectedCard != null) {
      this.connections.push([this.selectedCard, idx]);
    }
    this.selectedCard = null;
    if (this.connections.length == 2) {
      this.connections = [];
    }
  }

  onlySelectedCards() {
    return this.connections.map(c => c[0]);
  }

}
