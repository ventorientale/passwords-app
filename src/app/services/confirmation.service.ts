import {Injectable} from '@angular/core';
import {MatBottomSheet} from '@angular/material';
import {ConfirmationComponent} from '../components/confirmation/confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private bottomSheet: MatBottomSheet) {
  }

  public askConfirmation(title: string, message: string, buttons: Array<string>) {
    const [cancel, submit] = buttons;
    const bottomSheetRef = this.bottomSheet.open(ConfirmationComponent, {
      data: {title, message, submit, cancel},
    });
    return bottomSheetRef.afterDismissed();
  }
}

