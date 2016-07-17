import { provideRouter, RouterConfig } from '@angular/router';

import {About} from './components/about/about';
import {Home} from './components/home/home';
import {Login} from './components/login/login';
import {Register} from './components/register/register';
import {AuthGuard} from './services/authguard.service';
import {AuthService} from "./services/auth.service";

const routes: RouterConfig = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: Home },
  { path: 'about', component: About, canActivate: [AuthGuard] },
  { path: 'login', component: Login },
  { path: 'register', component: Register }
];

export const APP_ROUTER_PROVIDERS = [
  AuthService,
  AuthGuard,
  provideRouter(routes)
];
