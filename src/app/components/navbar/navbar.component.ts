import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('openButton') openButton: ElementRef;
  @ViewChild('navbar') navbar: ElementRef;
  // @ViewChild('sideMenu') sideMenu: ElementRef;
  isCollapsed: boolean=false;
  isTransparent: boolean=true;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  sidebarToggle(){
    if (this.isCollapsed) {
      this.sidebarOpen();
    } else {
        this.sidebarClose();
    }
    // console.log(this.isCollapsed);
  }

  sidebarOpen() {
    // const toggleButton = this.toggleButton;
    // const navbar = this.navbar;
    // const renderer = this.renderer;

    // // const html = document.getElementsByTagName('html')[0];
    // // console.log(html);
    // // console.log(toggleButton, 'toggle');

    // setTimeout(function(){
    //     // toggleButton.classList.add('toggled');
    //     renderer.addClass(toggleButton.nativeElement, 'toggled');
    // }, 500);
    // renderer.addClass(navbar.nativeElement, 'nav-open');
    // // html.classList.add('nav-open');

    this.isCollapsed = false;
  };

  sidebarClose() {
    // // const html = document.getElementsByTagName('html')[0];
    // // console.log(html);
    // // this.toggleButton.classList.remove('toggled');
    // this.renderer.removeClass(this.toggleButton.nativeElement, 'toggled');
    // this.renderer.removeClass(this.navbar.nativeElement, 'nav-open');
    this.isCollapsed = true;
    // html.classList.remove('nav-open');
  }

  transparentize() {
    this.isTransparent=true;
    const navbar = this.navbar;
    this.renderer.addClass(navbar.nativeElement, 'navbar-transparent');
  }

  untransparentize() {
    this.isTransparent=false;
    const navbar = this.navbar;
    this.renderer.removeClass(navbar.nativeElement, 'navbar-transparent');
  }

  isHome() {
    return true;
  }
}
