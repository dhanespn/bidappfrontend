import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Seller } from '../models/Seller';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 
  @Output() product?: Product;
  @Output() productID?: number;
  pId: any;
  sellerUser?: boolean;
  constructor(private productService: ProductService,private route: ActivatedRoute, private loginService: LoginService) { }
  productCatogories: any;
  submitted = false;
  seller : Seller = {
    firstName: "dhanes",
    lastName:"neelakantan",
    address:"testAddress",
    city: "testCity",
    state: "testState",
    pin: "123123",
    phone: "1234567890",
    email: "test@test.com",
    }
 
  ngOnInit(): void {
    //this.getUserInfo;
    this.pId = this.route.snapshot.params['id']; 
    if(this.pId == 0){
      this.newProduct();
    }
    this.sellerUser = this.loginService.sellerUser
    
  }

  /*getUserInfo = this.productService
  .getUserInfo()
  .subscribe((data: { body: any }) => {
    this.productService.username = data.body;
    if(this.productService.username === "dpn-seller"){
      this.sellerUser = true;
    } else {
      this.sellerUser = false;
    }
  });*/

  getProductList = this.productService
    .getProductDetailsById(this.route.snapshot.params['id'])
    .subscribe((data: { body: any }) => {
      this.product = data.body;
    });

   getCategoryList = this.productService.getListofCategory()
   .subscribe((data : { body : any}) => {
     this.productCatogories = data.body;
   }) 

   onSubmit() { 
     this.submitted = true; 
     this.product!.seller=this.seller;
     this.productService.saveProductDetails(this.product as Product);
  }

   newProduct() {
    this.product = new Product();
  }

  ngOnChanges() {

  }
}
