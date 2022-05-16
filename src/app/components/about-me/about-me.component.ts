import { Component, OnInit } from '@angular/core';
import images from './image-list.json';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  data: {media_url:string, caption:string}[]=images;
  constructor() {
  }
  
  ngOnInit(): void {
  }
}
