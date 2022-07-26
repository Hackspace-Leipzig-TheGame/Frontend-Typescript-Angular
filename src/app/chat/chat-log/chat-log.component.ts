import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chat-log',
  templateUrl: './chat-log.component.html',
  styleUrls: ['./chat-log.component.css']
})
export class ChatLogComponent implements OnInit {

  messages$ = this.chatService.messages$;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

}
