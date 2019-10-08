import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-passwords-manager',
  templateUrl: './passwords-manager.component.html',
  styleUrls: ['./passwords-manager.component.scss']
})
export class PasswordsManagerComponent implements OnInit {
  passwords: Array<{ title: string, password: string }> = [
    {title: 'Amazon', password: '123'},
    {title: 'Amazon', password: '123'},
    {title: 'Amazon', password: '123'},
    {title: 'Amazon', password: '123'},
    {title: 'Amazon', password: '123'},
    {title: 'Amazon', password: '123'},
    {title: 'Amazon', password: '123'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
