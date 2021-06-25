import { Component,ViewChild,OnInit } from '@angular/core';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { BackendService } from './backend.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

 // @ViewChild('productList' ,{ static:true})
  //productList: ProductListComponent;
  //constructor (private backendService: BackendService) {}
  
  ngOnInit(): void {
   // this.productList.products = this.backendService.getProducts();
  }
 
}
