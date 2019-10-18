import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AuthorizeKeyComponent} from './components/authorize-key/authorize-key.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'passwords-app';

  constructor() {

  }

  ngOnInit(): void {
  }
}
