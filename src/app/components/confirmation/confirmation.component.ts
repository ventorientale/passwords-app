import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';

interface Data {
  title: string;
  message: string;
  submit: string;
  cancel: string;
}


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Data,
    public bottomSheetRef: MatBottomSheetRef<ConfirmationComponent>
  ) {
  }

  ngOnInit() {
  }
}
