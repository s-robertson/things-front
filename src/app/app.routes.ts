import { provideRouter, RouterConfig } from '@angular/router';

import {About} from './components/about/about';
import {Home} from './components/home/home';
import {Login} from './components/login/login';

const routes: RouterConfig = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'login', component: Login }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
