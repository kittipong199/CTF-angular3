import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadderComponent } from './headder/headder.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HeadMenuComponent } from './head-menu/head-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    FooterComponent,
    MenuComponent,
    HeadMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
