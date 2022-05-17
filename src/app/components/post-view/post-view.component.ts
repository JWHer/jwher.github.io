import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import posts from '@assets/posts/post-list.json';

interface Post{
  title:string, description:string, "thumbnail-img":string, name:string, file_name:string
}

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  post:Post;
  postList:Post[] = posts.list;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap);
    // this.route.snapshot.paramMap.get('postName');
    let postName = this.route.snapshot.paramMap.get('postName');
    this.post = this.postList.find((post)=>post.name===postName);
    console.log(this.post.file_name);
  }

}
