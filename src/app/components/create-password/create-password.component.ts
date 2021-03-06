import {Component, Inject, OnInit} from '@angular/core';
import {PasswordItemInterface} from '../../interfaces/password-item.interface';
import {PasswordsListService} from '../../services/passwords-list.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PasswordGeneratorService} from '../../services/password-generator.service';
import {PasswordItemWrapperInterface} from '../../interfaces/password-item-wrapper-interface';
import {PASSWORD_ICONS} from '../../constants/password-icons';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {
  hide: boolean;
  passwords: Array<string> = [];
  key?: string;
  password: PasswordItemInterface = {
    title: '',
    login: '',
    password: '',
    url: '',
    icon: 'vpn_key'
  };
  availableIcons = PASSWORD_ICONS;

  constructor(
    private passwordService: PasswordsListService,
    public dialogRef: MatDialogRef<CreatePasswordComponent>,
    public passwordGenerator: PasswordGeneratorService,
    @Inject(MAT_DIALOG_DATA) public data: { password?: PasswordItemWrapperInterface }
  ) {
    if (data && data.password) {
      this.password = data.password.item;
      this.key = data.password.key;
    }
  }

  ngOnInit() {
  }

  generatePasswords() {
    this.passwords = new Array(8).fill(0)
      .map((item, index) => this.passwordGenerator.generate(6 + index));
  }

  save() {
    if (this.key) {
      this.passwordService.updatePassword(this.password, this.key);
      this.dialogRef.close();
      return;
    }
    this.passwordService.addPassword(this.password);
    this.dialogRef.close();
  }
}
