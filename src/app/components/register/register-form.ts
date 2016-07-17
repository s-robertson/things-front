import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../../models/user';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.html'
})
export class RegisterForm {
  user = new User();
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
