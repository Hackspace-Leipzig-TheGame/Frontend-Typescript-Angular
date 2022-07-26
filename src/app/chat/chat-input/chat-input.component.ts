import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  inputControl = new FormControl();

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  send(event: SubmitEvent) {
    event.preventDefault();
    this.chatService.send(this.inputControl.value);
    this.inputControl.reset();
  }

}
