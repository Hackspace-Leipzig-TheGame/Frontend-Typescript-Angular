import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatLogComponent } from './chat-log/chat-log.component';
import { ChatComponent } from './chat/chat.component';



@NgModule({
  declarations: [
    ChatLogComponent,
    ChatInputComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
