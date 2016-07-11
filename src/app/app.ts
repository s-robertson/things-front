import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { RestService } from './services/feathers.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app',
  pipes: [],
  providers: [ AuthService ],
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: './app.html',
})
export class App {
  constructor(private authService: AuthService, private restService: RestService, private router: Router) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['./login']);
    }
  }
}
