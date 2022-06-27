import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import {forkJoin, lastValueFrom} from 'rxjs';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bidapp';
  sellerUser? : boolean;
  constructor(private productService: ProductService, private loginService: LoginService){
    this.sellerUser = this.loginService.sellerUser;
  }
}