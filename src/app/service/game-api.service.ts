import { Injectable } from "@angular/core";
import { WebsocketService } from "./websocket.service";

@Injectable({
    providedIn: 'root'
})
export class GameApiService {


    constructor(private wsService: WebsocketService) { }




}