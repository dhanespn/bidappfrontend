import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { Login } from '../models/Login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username?: string;
  password?: string;
  token?: string;
  sessionStrorage: any;
  constructor(private loginService: LoginService, private router: Router) { }
  loginData?: Login | undefined; 

  ngOnInit(): void {
  }

  login(){ 
    this.loginData = {}
    this.loginData.username = this.username;
    this.loginData.password = this.password;
    this.loginService.authenticate(this.loginData);
    //if(this.loginService.username != undefined){
      this.router.navigate(['/products']);
    //}
  }
}
