import {Component, HostListener} from '@angular/core';
import {Platform} from "@ionic/angular";
import { ScreenSizeService } from './services/screen-size.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  hoverG: boolean = false;
  hoverB: boolean = false;
  iconSrcG = "../../assets/icon/arrow-g.svg"
  iconSrcB = "../../assets/icon/arrow-b.svg"
  isDesktop: boolean = false;
  constructor(private screensizeService: ScreenSizeService, private platform: Platform) {
    this.platform.ready().then(() => {
      this.screensizeService.onResize(this.platform.width());
    });
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      if (this.isDesktop && !isDesktop) {
        window.location.reload();
      }

      this.isDesktop = isDesktop;
    });
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: any) {
    this.screensizeService.onResize(event.target.innerWidth);
  }
}
