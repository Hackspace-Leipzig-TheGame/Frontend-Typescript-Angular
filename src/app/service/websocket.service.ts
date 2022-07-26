import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { webSocket } from 'rxjs/webSocket';
import { environment } from "src/environments/environment";
import { Message } from "../types/message.type";

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {

    protected ws = webSocket(environment.wsUrl);

    // Typeconversion since rxjs does not know the type of the message
    readonly messages$: Observable<Message> = this.ws.asObservable() as Observable<Message>;

    send(message: Message) {
        this.ws.next(message);
    }

}