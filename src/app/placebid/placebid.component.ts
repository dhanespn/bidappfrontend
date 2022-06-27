import { Component, Input, OnInit } from '@angular/core';
import { Buyer } from '../models/Buyer';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-placebid',
  templateUrl: './placebid.component.html',
  styleUrls: ['./placebid.component.css']
})
export class PlacebidComponent implements OnInit {
  @Input() product?: Product;
  bidAmount?: number;
  email? : string;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  buyer : Buyer = {
    firstName: "dhanes",
    lastName:"neelakantan",
    address:"testAddress",
    city: "testCity",
    state: "testState",
    pin: "123123",
    phone: "1234567890",
    email: "test@test.com",
    }

  onBidPlace() {
    this.buyer.productId = this.product?.productId;
    this.buyer.bidAmount = this.bidAmount as number;
    this.buyer.email = this.email;
    this.productService.saveBidDetails(this.buyer);
    window.location.reload();
  }

}
