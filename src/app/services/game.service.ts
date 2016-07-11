import { RestService, SocketService } from './feathers.service';
import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  private _socket;
  private _rest;

  constructor(_socketService: SocketService, _restService: RestService) {
    this._socket = _socketService.getService('games');
    this._rest = _restService.getService('games');
  }

  create(game: any) {
    return this._rest.create(game).then(result => {
      console.log(result);
    }).catch(error => {
      console.error(error);
    });
  }
}
