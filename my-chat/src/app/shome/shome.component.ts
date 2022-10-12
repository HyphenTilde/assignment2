import { Component, OnInit } from '@angular/core';
import { sender, User, groupch } from '../user_model';
import { LinksService } from '../links.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css']
})
export class ShomeComponent implements OnInit {
  user: User = {username: '', password: '', email: '', role: '', group: '', channel: ''};
  id: sender = {send:""};
  group_array: string[] = [];
  channel_array: any[] =[];
  constructor(private link:LinksService, private router: Router) { }

  ngOnInit(): void {
    this.id.send = localStorage.getItem('username')!
    this.link.collect(this.id).subscribe((data)=>{
      for(let i = 0; i < data.length; i++){
        this.group_array.push(data[i].name);
      }
    })
    this.link.ccollect(this.id).subscribe((data)=>{
      for(let i = 0; i < data.length; i++){
        this.channel_array.push({'name':data[i].name, 'group':data[i].group_id})
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

  //group admin functions
  groupcreate(user: User){
    this.link.gcreate(user).subscribe((data)=>{
      if(data.check == 1){
        alert('Group created successfully');
      }
    })
  }

  addusertogroup(user: User){
    this.link.addtogroup(user).subscribe((data)=>{
      if(data.check == 1){
        alert('User added successfully');
      }
    })
  }
  channelcreate(user: User){
    this.link.ccreate(user).subscribe((data)=>{
      if(data.check == 1){
        alert('Channel created successfully');
      }
    })
  }
  addusertochannel(user: User){
    this.link.addtochannel(user).subscribe((data)=>{
      if(data.check == 1){
        alert('User added successfully');
      }
    })
  }
  removegroup(user: User){
    this.link.removegroup(user).subscribe((data)=>{
      if(data.check == 1){
        alert('Group removed successfully');
      }
    })
  }
  removechannel(user: User){
    this.link.removechannel(user).subscribe((data)=>{
      if(data.check == 1){
        alert('Channel removed successfully');
      }
    })
  }

}
