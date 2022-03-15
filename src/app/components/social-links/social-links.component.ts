import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {
  @Input() @HostBinding("class.icon-small") public isSmall = false;
  @Input() @HostBinding("class.color-light") public isLight = false;
  constructor() { }

  ngOnInit(): void {
  }

}
