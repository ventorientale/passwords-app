import {Component, OnInit} from '@angular/core';
import {PasswordsListService} from '../../services/passwords-list.service';
import {PasswordItemInterface} from '../../interfaces/password-item.interface';
import {MatDialog} from '@angular/material';
import {CreatePasswordComponent} from '../create-password/create-password.component';
import {PasswordItemWrapperInterface} from '../../interfaces/password-item-wrapper-interface';

@Component({
  selector: 'app-passwords-manager',
  templateUrl: './passwords-manager.component.html',
  styleUrls: ['./passwords-manager.component.scss']
})
export class PasswordsManagerComponent implements OnInit {
  passwords: PasswordItemWrapperInterface[];
  selectedPasswordIndex: number;

  constructor(
    private passwordService: PasswordsListService,
    private matDialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.passwordService.getAllPasswords()
      .subscribe((passwords: PasswordItemWrapperInterface[]) => {
        this.passwords = passwords;
      });
  }

  showAddDialog() {
    const dialogRef = this.matDialog.open(CreatePasswordComponent);
  }

  deletePassword(password: PasswordItemWrapperInterface) {
    this.passwordService.deletePassword(password);
  }
}

