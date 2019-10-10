import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  firstOpacity = 0;
  secondOpacity = 0;
  constructor() {
  }

  getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

  ngOnInit() {
    interval(1000).subscribe(() => {
      this.firstOpacity = this.getRandomArbitrary(0.5, 1);
      this.secondOpacity = this.getRandomArbitrary(0.3, 0.7);
    });
  }

}
