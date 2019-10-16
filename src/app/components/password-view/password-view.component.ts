import {Component, Input, OnInit} from '@angular/core';
import {PasswordItemWrapperInterface} from '../../interfaces/password-item-wrapper-interface';
import {PasswordsListService} from '../../services/passwords-list.service';
import {ConfirmationService} from '../../services/confirmation.service';
// @ts-ignore
import * as copy from 'clipboard-copy';
import {CreatePasswordComponent} from '../create-password/create-password.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-password-view',
  templateUrl: './password-view.component.html',
  styleUrls: ['./password-view.component.scss']
})
export class PasswordViewComponent implements OnInit {
  @Input() password: PasswordItemWrapperInterface;
  hide = true;

  constructor(
    private passwordService: PasswordsListService,
    private confirmationService: ConfirmationService,
    private matDialog: MatDialog
  ) {
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

  copyToClipboard() {
    copy(this.password.item.password);
  }

  showEditDialog() {
    const dialogRef = this.matDialog.open(CreatePasswordComponent, {
      data: {password: this.password}
    });
  }
}
