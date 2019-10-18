import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    sanitizer: DomSanitizer,
    iconRegistry: MatIconRegistry,
  ) {
    iconRegistry.addSvgIcon(
      'app-icon-google',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/google.svg')
    );
    iconRegistry.addSvgIcon(
      'app-icon-facebook',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/facebook.svg')
    );
    iconRegistry.addSvgIcon(
      'app-icon-git-hub',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/github.svg')
    );
  }

  ngOnInit() {
  }

  authenticateByFacebook() {
    this.authenticationService.authByFaceBook().then(() => this.router.navigate(['']));
  }

  authenticateByGoogle() {
    this.authenticationService.authByGoogle().then(() => this.router.navigate(['']));
  }

  authenticateByGitHub() {
    this.authenticationService.authByGitHub().then(() => this.router.navigate(['']));
  }
}

