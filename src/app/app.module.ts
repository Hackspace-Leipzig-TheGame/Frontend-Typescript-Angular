import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { GameModule } from './game/game.module';
import { WebSocketMockService } from './service/mock/websocket-mock.service';
import { WebsocketService } from './service/websocket.service';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    GameModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: WebsocketService, useClass: WebSocketMockService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
