import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
// import {enableProdMode} from '@angular/core';
import { RestService, SocketService } from './app/services/feathers.service';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import {App} from './app/app';

// enableProdMode()

bootstrap(App, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  RestService,
  SocketService
])
.catch(err => console.error(err));
