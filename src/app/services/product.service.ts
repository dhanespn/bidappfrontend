import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Buyer } from '../models/Buyer';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  prd?: Product;
  selectedProduct?: Product;
  username?: string;
  productUrl = "api/seller/product";
  catUrl = 'api/common/category';
  addUrl = 'api/seller/add-product';
  placeBidUrl = "/api/buyer/place-bid";
  userInfoUrl = "api/userinfo";
  token = sessionStorage.getItem("token");
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })

  constructor(private http: HttpClient) { }

  
  getProductList(): Observable<any> {
   
    return this.http.get<Product[]>(
      this.productUrl,{ headers: this.headers,  observe: 'response' });
  }

  getProductDetailsById(productId: string): Observable<HttpResponse<Product>> {
    return this.http.get<Product>(
      "api/seller/show-bids/"+productId, { headers: this.headers,observe: 'response' });
  }

  getListofCategory():  Observable<HttpResponse<string[]>> {
    return this.http.get<string[]>(this.catUrl, { headers: this.headers,observe: 'response' });
  }

  saveProductDetails(prdct: Product ){
    this.http.post<Product>(this.addUrl, prdct ,{ headers: this.headers }).subscribe(data => {
      this.prd = data;
  });
  }

  saveBidDetails(buyer: Buyer) {
    this.http.post<Product>(this.placeBidUrl, buyer, { headers: this.headers } ).subscribe(data => {
      console.log(data);
  });
  }

 // getUserInfo()  getUserInfo() {
    // return  firstValueFrom(this.http.get<string>(
    //   this.userInfoUrl,{ headers: this.headers,  observe: 'response' })).then(data => {
    //     this.username = data.body!;
    // });

   // return this.http.get(this.userInfoUrl,{ headers: this.headers,  observe: 'response' })
   
}
