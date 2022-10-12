import { Component, OnInit } from '@angular/core';
import { sender, User } from '../user_model';
import { LinksService } from '../links.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css']
})
export class ShomeComponent implements OnInit {
  user: User = {username: '', password: '', email: '', role: ''};
  id: sender = {send:""};
  group_array: string[] = [];
  constructor(private link:LinksService, private router: Router) { }

  ngOnInit(): void {
    this.id.send = localStorage.getItem('id')!
    this.link.collect(this.id).subscribe((data)=>{
      for(let i = 0; i < data.length; i++){
        this.group_array.push(data[i].name);
      }
    })
  }

  supercreate(user: User){
    this.link.screate(user).subscribe((data)=>{
      if(data.check == 1){
        alert('User created successfully')
      }
    })
  }

  superremove(user: User){
    this.link.sremove(user).subscribe((data)=>{
      if(data.check == 1){
        alert('User deleted successfully')
      }
    })
  }
  superupgrade(user: User){
    this.link.supgrade(user).subscribe((data)=>{
      if(data.check == 1){
        alert('User upgraded successfully')
      }
    })
  }

}
