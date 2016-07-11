const feathers = require('feathers/client');
const socketio = require('feathers-socketio/client');
const io = require('socket.io-client');
const localstorage = require('feathers-localstorage');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest/client');
const authentication = require('feathers-authentication/client');

import { Injectable } from '@angular/core';

const superagent = require('superagent');
const HOST = 'http://localhost:9000';

@Injectable()
export class RestService {
  private _app: any;

  constructor() {
    this._app = feathers()
      .configure(rest(HOST).superagent(superagent))
      .configure(hooks())
      .configure(authentication({ storage: localstorage }));
  }

  getService(service: string) {
    return this._app.service(service);
  }

  getApp() {
    return this._app;
  }
}

@Injectable()
export class SocketService {
  public socket: any;
  private _app: any;

  constructor() {
    this.socket = io(HOST);
    this._app = feathers()
      .configure(socketio(this.socket))
      .configure(hooks())
      .configure(authentication({ storage: localstorage }));
  }

  getService(service: string) {
    return this._app.service(service);
  }

  getApp() {
    return this._app;
  }
}
