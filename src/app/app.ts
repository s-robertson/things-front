import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GameService } from './services/game.service';

@Component({
  selector: 'app',
  pipes: [],
  providers: [ GameService ],
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: './app.html',
})
export class App {
  private gameService: GameService;

  constructor(gameService: GameService) {
    this.gameService = gameService;
  }

  ngOnInit() {
    this.gameService.create({ text: "blah" });
  }
}
