import {Component, Inject, OnInit} from '@angular/core';
import {PasswordItemInterface} from '../../interfaces/password-item.interface';
import {PasswordsListService} from '../../services/passwords-list.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {
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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
  }

  save() {
    this.passwordService.addPassword(this.password);
    this.dialogRef.close();
  }
}
