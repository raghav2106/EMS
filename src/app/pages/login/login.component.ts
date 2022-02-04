import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  tmp:boolean=true
  uname:string;
  pwd:String;
  
  constructor(@Inject(Router) private route) {
  }
  function1(){
    if(this.uname=="scott" && this.pwd=="scott123"){
      localStorage.setItem("username", this.uname);
      this.route.navigateByUrl("dashboard")
    }else{
      window.alert("Invalid login")
      this.route.navigateByUrl("login")
    }

  }
  ngOnInit(): void {
  }
  
}
