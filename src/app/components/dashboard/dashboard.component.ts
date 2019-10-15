import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserInterface} from '../../interfaces/user-interface';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../services/authentication.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {SCREEN_SIZE_MOBILE_MAX} from '../../constants/screen-sizes';
import {ExportService} from '../../services/export.service';
import {PasswordsListService} from '../../services/passwords-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: UserInterface;
  mobileQuery: MediaQueryList;
  private readonly mobileQueryListener: () => void;

  constructor(
    userService: UserService,
    public authenticationService: AuthenticationService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public exportService: ExportService
  ) {
    userService.user.subscribe((user: UserInterface) => this.user = user);
    this.mobileQuery = media.matchMedia(`(max-width: ${SCREEN_SIZE_MOBILE_MAX})`);
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit() {
  }
}
