import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private gameId!: string;

    paylers$ = new BehaviorSubject<{ name: string, cards: number }[]>([
        { name: 'Player 1', cards: 0 },
        { name: 'Player 2', cards: 1 },
        { name: 'Player 3', cards: 2 },
    ]);

    currentHand$ = new BehaviorSubject<number[]>([1, 2, 3, 4, 5, 6]);

    setGameId(id: string) {
        this.gameId = id;
    }

}