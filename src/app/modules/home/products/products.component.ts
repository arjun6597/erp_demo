import { Component, OnInit } from '@angular/core';
import { products } from '@global/constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productDetail = []
  constructor() { 
    this.productDetail = products;
  }

  ngOnInit(): void {
  }

}
