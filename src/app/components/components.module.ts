import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    AboutMeComponent,
  ],
  imports: [
  ],
  exports: [
    HomeComponent
  ]
})
export class ComponentsModule { }
