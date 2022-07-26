import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  @Input()
  players: { name: string, cards: number }[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
