import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
shippingCosts;
productData;

  constructor(private cartService: CartService) { }

  ngOnInit() {
      this.shippingCosts = this.cartService.getShippingPrices();
      this.productData = this.cartService.getProductData();

      console.warn("this.productData",this.productData);
  }

}