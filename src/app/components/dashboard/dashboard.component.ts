import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserInterface} from '../../interfaces/user-interface';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../services/authentication.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {SCREEN_SIZE_MOBILE_MAX} from '../../constants/screen-sizes';
import {ExportService} from '../../services/export.service';
import {PasswordsListService} from '../../services/passwords-list.service';
import {PasswordItemWrapperInterface} from '../../interfaces/password-item-wrapper-interface';
import {ConfirmationService} from '../../services/confirmation.service';
import {DataBaseService} from '../../services/data-base.service';

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
    private confirmationService: ConfirmationService,
    private db: DataBaseService,
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

  deleteAllData() {
    this.confirmationService.askConfirmation(
      'Are you sure?',
      'All your data will be deleted permanently.',
      ['Cancel', 'Yes, Delete']
    ).subscribe((isSubmitted: boolean) => {
      if (!isSubmitted) {
        return;
      }
      this.db.delete([]);
      this.authenticationService.logout();
    });
  }
}
