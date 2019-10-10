import {Component, OnInit} from '@angular/core';
import {UserInterface} from '../../entities/user-interface';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: UserInterface;

  constructor(userService: UserService, public authenticationService: AuthenticationService) {
    userService.user.subscribe((user: UserInterface) => this.user = user);
  }

  ngOnInit() {
  }

}
