import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinksService } from '../links.service';
import { User, checker } from '../user_model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {username:'', password:'', email:'', role:''};
  constructor(private link:LinksService, private router: Router) { }

  ngOnInit(): void {
  }

  LogIn(user: User){
    this.link.login(user).subscribe((data)=>{
      if(data.check == 1){
        alert("Successfully Logged in");
      }else{
        console.log(data.err);
      }
    }
    )
  }



}
