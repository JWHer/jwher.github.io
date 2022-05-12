import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  data: {media_url:string, caption:string}[]=
  [
    // {
    //     "media_url": "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "caption": "sample"
    // },
    {
        "media_url": "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/278053783_527554645407531_9086474611405938156_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=Sn2coJm0B5QAX_TtAat&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT8KC4-zfs6H4F04tf04qGK3QEN_OU3RqXPns7Kt47gC-g&oe=6282270B",
        "caption": "#함바그동 #샤로수길 #먹스타그램"
    },
    {
        "media_url": "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/275198313_4792400477534746_1384451560430702739_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=PfTS_uPpm4sAX8By7Ab&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT89uNAszqqgWxUbPsjdLVXj5TJeSsqfmyzEn0s6JtotNQ&oe=62817AEC",
        "caption": "An empty grave is there to prove my Savior lives~\n#주일 #shinechurch"
    },
    {
        "media_url": "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/274700594_702750661134301_2773328072109850889_n.jpg?_nc_cat=102&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=Dqxr8zMbj4AAX9RD86B&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT8Qmw_-lNMyAiq3xdv-pxFUqCxbFBSi3Pz69bSCncyn6Q&oe=6280A17A",
        "caption": "#은행골 #서울대입구 #먹스타그램"
    },
    {
        "media_url": "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/274115552_258956236419215_7766567013812595825_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=byz9ismP3GcAX8XwZVq&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT8qNsvAPIj9qCUDMC-pbGTe4nzvO0sTTaAWPN209TSMyA&oe=62816F2B",
        "caption": "#두레미담 #낙성대"
    },
    {
        "media_url": "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/273739223_309669091197946_7635466595523043060_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=esJGJO_FE9IAX-0Ix24&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT8FzWAZ_P0MN3wOH8nn-bV4-zxhTGCc9mZIiqOXjgAAbg&oe=62818D8F",
        "caption": "#자취 #낙성대"
    },
    {
        "media_url": "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/273794722_710668916763624_1684111275087044317_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=Gchg3ufcbuoAX-_J5BO&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT8db-WJ8omYzfpmchEpDbf78q55vouhNn3rO2aQMoEtyg&oe=6281DE92",
        "caption": "#비빔밥 #낙성대 #밥"
    },
    {
        "media_url": "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/273366805_479405857038941_5984195646343338317_n.jpg?_nc_cat=100&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=qMST9p_YuLsAX-rsNmK&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT9ucLVd3215dl1B8_plUAe6zdI-Hbdk_iF3s4xnKnZoIQ&oe=62806FCA",
        "caption": "#강남역 #낙성대 #밥 #친구"
    },
    {
        "media_url": "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/262571930_3237702329804071_6960827555231093280_n.jpg?_nc_cat=103&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=8UHcAynmXjUAX9_h7nv&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT-_DsGQS2uR1wEg0fWUo4GifmYKNHCtxAVGUulKKJPKsg&oe=62808657",
        "caption": "#태평역 #낙성대 #밥 #친구"
    },
    {
        "media_url": "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/272943339_148522864241910_6951130801968921064_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=0agzqHLPpKYAX9fXdDQ&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT9QH0muamqAR8-fRIlnRCy86G5Hbl61J_5rkowJ1P-HgA&oe=6281F83D",
        "caption": "#샤로수길 #낙성대 #밥 #친구"
    }
  ];
  constructor() {
  }
  
  ngOnInit(): void {
    // (
    //   async () => {
    //     const response = await fetch('/api/me/media?fields=id,caption&access_token=IGQVJVNW5TbldjdWo5NkhCeDRvOUFLUU55a2xsbUtJSXllaUFZAYmozUUFoNnNERUZACOXpENG9kUFMwcGlHd3B4YnpheEV3ODRrcFA0QVpoa1ZApOVpleGlNVUlZAU1ZAMQ21ZAbGRvdy1nOVdMQW9ZAQWhDTAZDZD');
    //     let mediaList: {data:Array<{id:string, caption:string}>} = await response.json();
    //     console.log(mediaList);
    //     for(const media of mediaList.data){
    //       // console.log("media:"+media);
    //       const response = await fetch('/api/'+media.id+'?fields=media_type,media_url&access_token=IGQVJVNW5TbldjdWo5NkhCeDRvOUFLUU55a2xsbUtJSXllaUFZAYmozUUFoNnNERUZACOXpENG9kUFMwcGlHd3B4YnpheEV3ODRrcFA0QVpoa1ZApOVpleGlNVUlZAU1ZAMQ21ZAbGRvdy1nOVdMQW9ZAQWhDTAZDZD');
    //       let result:{media_type:string, media_url:string} = await response.json();
    //       console.log(result);
    //       if(result.media_type=='IMAGE'){
    //         this.data.push({media_url:result.media_url, caption:media.caption});
    //       }
    //     }
    //     console.log(this.data);
    //   }
    // )();
      
  }
}
