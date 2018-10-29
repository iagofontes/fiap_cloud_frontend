import { Component, ChangeDetectorRef, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  shouldRun = true;
  logged = false;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.logged = sessionStorage.getItem('logged')=='true'?true:false;
  }

  ngOnChanges() {
    this.logged = sessionStorage.getItem('logged')=='true'?true:false;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
