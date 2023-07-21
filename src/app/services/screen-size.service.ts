import { Injectable } from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  constructor() { }
  private isDesktop = new BehaviorSubject<boolean>(false);

  onResize(size: number) {
    if (size < 568) {
      this.isDesktop.next(false);
    } else {
      this.isDesktop.next(true);
    }
  }

  isDesktopView(): Observable<boolean> {
    return this.isDesktop.asObservable().pipe(distinctUntilChanged());
  }
}
