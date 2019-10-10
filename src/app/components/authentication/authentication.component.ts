import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  authenticateByFacebook() {
    this.authenticationService.authByFaceBook().then(() => this.router.navigate(['']));
  }

  authenticateByGoogle() {
    this.authenticationService.authByGoogle().then(() => this.router.navigate(['']));
  }
}
