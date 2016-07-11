import { RestService, SocketService } from './feathers.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private socketApp: any;
  private restApp: any;

  constructor(restService: RestService, socketService: SocketService) {
    this.socketApp = restService.getApp();
    this.restApp = socketService.getApp();
  }

  isAuthenticated(): boolean {
    return this.restApp.get('user');
  }
}
