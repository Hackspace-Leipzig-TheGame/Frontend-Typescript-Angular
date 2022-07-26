import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-card-hand',
  templateUrl: './card-hand.component.html',
  styleUrls: ['./card-hand.component.css']
})
export class CardHandComponent implements OnInit {

  @Input() selected!: number | null;
  @Input() connections: number[][] = [];
  @Output() cardSelected = new EventEmitter<number>();

  currentHand$ = this.gameService.currentHand$;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  select(idx: number) {
    if (!this.onlyCards().includes(idx)) {
      this.cardSelected.emit(idx);
    }
  }

  onlyCards() {
    return this.connections.map(c => c[0]);
  }

}
