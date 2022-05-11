import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  data: {media_url:string, caption:string}[]=[];
  constructor() {
  }
  
  ngOnInit(): void {
    (
      async () => {
        const response = await fetch('/api/me/media?fields=id,caption&access_token=IGQVJVNW5TbldjdWo5NkhCeDRvOUFLUU55a2xsbUtJSXllaUFZAYmozUUFoNnNERUZACOXpENG9kUFMwcGlHd3B4YnpheEV3ODRrcFA0QVpoa1ZApOVpleGlNVUlZAU1ZAMQ21ZAbGRvdy1nOVdMQW9ZAQWhDTAZDZD');
        let mediaList: {data:Array<{id:string, caption:string}>} = await response.json();
        console.log(mediaList);
        for(const media of mediaList.data){
          // console.log("media:"+media);
          const response = await fetch('/api/'+media.id+'?fields=media_type,media_url&access_token=IGQVJVNW5TbldjdWo5NkhCeDRvOUFLUU55a2xsbUtJSXllaUFZAYmozUUFoNnNERUZACOXpENG9kUFMwcGlHd3B4YnpheEV3ODRrcFA0QVpoa1ZApOVpleGlNVUlZAU1ZAMQ21ZAbGRvdy1nOVdMQW9ZAQWhDTAZDZD');
          let result:{media_type:string, media_url:string} = await response.json();
          console.log(result);
          if(result.media_type=='IMAGE'){
            this.data.push({media_url:result.media_url, caption:media.caption});
          }
        }
        console.log(this.data);
      }
    )();
      
  }
}
