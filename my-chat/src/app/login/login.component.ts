import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinksService } from '../links.service';
import { User } from '../user_model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {username:'', password:'', email:'', role:'', group: '', channel: ''};
  constructor(private link:LinksService, private router: Router) { }

  ngOnInit(): void {
  }

  LogIn(user: User){
    this.link.login(user).subscribe((data)=>{
      if(data.check == 1){
        alert("Successfully Logged in");
        localStorage.setItem('id',data.userdata[0]._id);
        localStorage.setItem('username',data.userdata[0].username);
        localStorage.setItem('password',data.userdata[0].password);
        localStorage.setItem('email',data.userdata[0].email);
        localStorage.setItem('role',data.userdata[0].role);
        if(data.userdata[0].role == "User"){
          this.router.navigateByUrl('home');
        }else if (data.userdata[0].role == "Super Admin"){
          this.router.navigateByUrl('shome');
        }else if (data.userdata[0].role == "Group Admin"){
          this.router.navigateByUrl('ghome');
        }else if (data.userdata[0].role == "Group Assis"){
          this.router.navigateByUrl('gahome');
        }
      }else{
        console.log(data.err);
      }
    }
    )
  }



}
