import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username : string | undefined;
  public password :string | undefined;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  loginUser(){
   //redirect
   this.router.navigate(['/home'])
  }

}
