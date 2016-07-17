import { Component } from '@angular/core';
import { RegisterForm } from './register-form';

@Component({
  selector: 'register',
  template: '<register-form></register-form>',
  directives: [RegisterForm]
})
export class Register {}
