import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sidebarClose() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
