import { Injectable } from "@angular/core";
import { filter, OperatorFunction, scan } from "rxjs";
import { ChatMessage } from "../types/chat-message.type";
import { Message } from "../types/message.type";
import { WebsocketService } from "./websocket.service";

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    private username = "unset";

    messages$ = this.wsService.messages$.pipe(
        this.filterForChatMessages(),
        scan((acc, curr) => [...acc, curr], [] as ChatMessage[])
    );

    constructor(private wsService: WebsocketService) { }


    setUsername(username: string) {
        this.username = username;
    }

    send(message: string) {
        const chatMessage: ChatMessage = {
            timestamp: Date.now(),
            id: 'fake',  //TODO
            type: 'chat',
            sender: this.username,
            message: message
        };
        this.wsService.send(chatMessage);
    }


    private filterForChatMessages(): OperatorFunction<Message, any> {
        return (source) => source.pipe(
            filter(message => message.type === 'chat')
        );
    }
}