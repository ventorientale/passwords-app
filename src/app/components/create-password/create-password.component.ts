import {Component, Inject, OnInit} from '@angular/core';
import {PasswordItemInterface} from '../../interfaces/password-item.interface';
import {PasswordsListService} from '../../services/passwords-list.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PasswordGeneratorService} from '../../services/password-generator.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {
  hide: boolean;
  passwords: Array<string> = [];
  password: PasswordItemInterface = {
    title: '',
    login: '',
    password: '',
    url: '',
    icon: 'emoji_emotions'
  };

  constructor(
    private passwordService: PasswordsListService,
    public dialogRef: MatDialogRef<CreatePasswordComponent>,
    public passwordGenerator: PasswordGeneratorService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
  }

  generatePasswords() {
    this.passwords = new Array(8).fill(0)
      .map((item, index) => this.passwordGenerator.generate(6 + index));
  }

  save() {
    this.passwordService.addPassword(this.password);
    this.dialogRef.close();
  }
}
