import { Component, ViewChild, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { Location } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _router: Subscription
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  title = 'jwher-tech';

  constructor(
    private renderer: Renderer2,
    private router: Router,
    public location: Location
    ) {

  }
  ngOnInit() {
    this._router = this.router.events.pipe(
        filter( (event) => event instanceof NavigationEnd)
      ).subscribe(event => {
          if(window.outerWidth > 991) {
            window.document.children[0].scrollTop = 0;
          }else {
            window.document.activeElement.scrollTop = 0;
          }
          this.navbar.sidebarClose();
        }
      );

    // show navbar when you scroll top of page
    this.renderer.listen('window', 'scroll', (event) => {
      const number = window.scrollY;
      if (number > 150 || window.pageYOffset > 150) {
        this.navbar.untransparentize();
      } else {
        this.navbar.transparentize();
      }
    });

  }

  removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    return false;
  }
}
