import {Component} from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'home',
  pipes: [],
  providers: [ GameService ],
  directives: [],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {

  constructor() {}

  ngOnInit() {

  }

}
