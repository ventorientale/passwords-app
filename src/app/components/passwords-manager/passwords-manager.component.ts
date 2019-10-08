import {Component, OnInit} from '@angular/core';
import {PasswordsListService} from '../../services/passwords-list.service';
import {PasswordItemInterface} from '../../interfaces/password-item.interface';

@Component({
  selector: 'app-passwords-manager',
  templateUrl: './passwords-manager.component.html',
  styleUrls: ['./passwords-manager.component.scss']
})
export class PasswordsManagerComponent implements OnInit {
  passwords: PasswordItemInterface[] = [];

  constructor(private passwordService: PasswordsListService) {
  }

  ngOnInit() {
    this.passwordService.getAllPasswords()
      .subscribe((passwords: PasswordItemInterface[]) => {
        this.passwords = passwords;
      });
  }

}
