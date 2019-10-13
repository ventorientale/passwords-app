import {Component, Input, OnInit} from '@angular/core';
import {PasswordItemWrapperInterface} from '../../interfaces/password-item-wrapper-interface';
import {PasswordsListService} from '../../services/passwords-list.service';

@Component({
  selector: 'app-password-view',
  templateUrl: './password-view.component.html',
  styleUrls: ['./password-view.component.scss']
})
export class PasswordViewComponent implements OnInit {
  @Input() password: PasswordItemWrapperInterface;
  hide = true;

  constructor(private passwordService: PasswordsListService) {
  }

  ngOnInit() {
  }

  deletePassword(password: PasswordItemWrapperInterface) {
    this.passwordService.deletePassword(password);
  }
}
