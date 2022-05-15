import { Component, OnInit } from '@angular/core';

import posts from './post-list.json';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  page:{url:string, title:string, desc:string, thumbnail:string} = {
    url: "https://jwher.github.io",
    title: "test",
    desc: "description",
    thumbnail: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
  postList:{title:string}[] = posts.list;
  constructor() { }

  ngOnInit(): void {
    console.log(this.postList);
  }

}
