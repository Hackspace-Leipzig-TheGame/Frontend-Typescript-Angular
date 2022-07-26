import { Subject } from "rxjs";
import { Message } from "src/app/types/message.type";
import { WebsocketService } from "../websocket.service";

export class WebSocketMockService extends WebsocketService {

    override messages$ = new Subject<Message>();

    override send(message: Message) {
        console.log("Mock broadcast: " + JSON.stringify(message));
        this.messages$.next(message);
    }


}