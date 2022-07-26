import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/service/chat.service';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  constructor(
    private chatService: ChatService,
    private gameService: GameService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id')
    this.chatService.setUsername(localStorage.getItem('username') ?? 'anonymous');
    if (!gameId) {
      throw new Error('')
    }
    this.gameService.setGameId(gameId);
  }

}
