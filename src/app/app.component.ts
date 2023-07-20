import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  hoverG: boolean = false;
  hoverB: boolean = false;
  iconSrcG="../../assets/icon/arrow-g.svg"
  iconSrcB="../../assets/icon/arrow-b.svg"
  constructor() {}
}
