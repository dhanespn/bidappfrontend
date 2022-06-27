import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/Login';
import {SessionStorageService} from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = "/authenticate";
  authToken?:any;
  userInfoUrl = "api/userinfo";
  username?: string
  sellerUser?: boolean;
  

  constructor(private http: HttpClient, private sessionStorage: SessionStorageService) { }
  authenticate(login: Login| undefined) {
    //return this.http.post<string>(this.loginUrl, { observe: 'response' });
    this.http.post<string>(this.loginUrl, login ).subscribe(data => {
      this.authToken = data
      return this.setSessionToken(this.authToken);
    });
    
  }
  
setSessionToken(authToken: any) {
  sessionStorage.setItem('token',authToken.token);
  return this.getUserInfo(this.authToken);
}


getUserInfo(authToken: any) {
  var headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken.token}`
  })
    this.http.get(this.userInfoUrl,{ headers: headers,  observe: 'response' })
    .subscribe((data : { body : any}) => {
      this.username = data.body;
      this.getTypeofUser(data.body);
      return this.username;
  });
}

getTypeofUser(userName: string){
  if(userName == "dpn-seller") {
    this.sellerUser = true;
  } else {
    this.sellerUser = false
  }
}
}

