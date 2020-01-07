import { Component } from '@angular/core';
import { CartService } from '../cart.service';

import { products } from '../products';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public isloading = true; 
  public productDataValue; 
  products = products;
  productDataList;
  constructor(private cartService: CartService) { }


  share() {
    window.alert('The product has been shared!');
  }

    onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  
     ngOnInit() {
       this.productDataList = this.cartService.getShippingPrices();

  // this.cartService.getProductData().subscribe(url=>{
  //    if(url){
  //        this.productDataList = url;
  //        console.warn(" this.productDataList 1:", this.productDataList )
  //     }})

       //console.warn(" this.productDataList 0:", this.productDataList )
   }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/