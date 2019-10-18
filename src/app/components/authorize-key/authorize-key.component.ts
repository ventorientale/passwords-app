import {Component, OnInit} from '@angular/core';
import {ENCRYPTION_AES_CTR} from '../../constants/encryption-types';

@Component({
  selector: 'app-authorize-key',
  templateUrl: './authorize-key.component.html',
  styleUrls: ['./authorize-key.component.scss']
})
export class AuthorizeKeyComponent implements OnInit {
  hide = true;
  algorithm = ENCRYPTION_AES_CTR;

  constructor() {
  }

  ngOnInit() {
  }

}
