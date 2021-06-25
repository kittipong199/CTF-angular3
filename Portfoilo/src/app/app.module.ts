import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MenuComponent } from './menu/menu.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillComponent } from './skill/skill.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

import { RouterModule,  Routes } from '@angular/router';
import { BackendService } from './backend.service';

 const routes: Routes = [
   {
     path: 'about-me',
     component: AboutMeComponent
   },
   {
    path: 'skill',
    component: SkillComponent
  },
  {
    path: 'contact-me',
    component: ContactMeComponent
  },
  {
    path: 'portfolio ',
    component: PortfolioComponent
  },
  
 ]
@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    MenuComponent,
    AboutMeComponent,
    SkillComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
