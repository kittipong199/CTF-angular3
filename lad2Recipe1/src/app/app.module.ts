import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackendService} from './backend.service';
import { CatalogModule } from './catalog/catalog.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { LogingComponent } from './loging/loging.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { ProductDetailComponent } from './catalog/product-detail/product-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path: 'login',
    component: LogingComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
    },
  {
    path: '**',
    component: PageNotFoundComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   LogingComponent,
   PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    HomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
