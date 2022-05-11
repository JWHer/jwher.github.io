import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    RecentPostsComponent,
    SocialLinksComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ]
})
export class ComponentsModule { }
