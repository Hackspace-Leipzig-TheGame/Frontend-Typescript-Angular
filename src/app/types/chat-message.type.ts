import { Message } from "./message.type";

export interface ChatMessage extends Message {
    sender: string;
    timestamp: number;
    message: string;
}
