import {Component, Input, OnInit} from '@angular/core';
import {PasswordItemWrapperInterface} from '../../interfaces/password-item-wrapper-interface';
import {PasswordsListService} from '../../services/passwords-list.service';
import {ConfirmationService} from '../../services/confirmation.service';

@Component({
  selector: 'app-password-view',
  templateUrl: './password-view.component.html',
  styleUrls: ['./password-view.component.scss']
})
export class PasswordViewComponent implements OnInit {
  @Input() password: PasswordItemWrapperInterface;
  hide = true;

  constructor(private passwordService: PasswordsListService, private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
  }

  deletePassword(password: PasswordItemWrapperInterface) {
    this.confirmationService.askConfirmation(
      'Are you sure?',
      'Your password will be deleted permanently.',
      ['Cancel', 'Delete']
    ).subscribe((isSubmitted: boolean) => {
      if (!isSubmitted) {
        return;
      }
      this.passwordService.deletePassword(password);
    });
  }
}
