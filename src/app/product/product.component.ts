import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';
import { ActivatedRoute, Router } from '@angular/router'; 
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products?: Product[];
  selectedProduct? : Product;
  sellerUser? : boolean;

  constructor(private productService: ProductService, private activateRoute: ActivatedRoute,private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
   // this.getUserInfo;
    this.getProductList;
    this.sellerUser = this.loginService.sellerUser;
  }

 /* getUserInfo = this.productService
    .getUserInfo()
    .subscribe((data: { body: any }) => {
      this.productService.username = data.body;
    });*/

  getProductList = this.productService
    .getProductList()
    .subscribe((data: { body: any }) => {
      this.products = data.body;
    });

   onSelect(product: Product){
      this.selectedProduct = product;
      this.router.navigate(['/product-details/'+product.id]);
     // window.location.href = '/product-details/'+product.id;
   } 
}
