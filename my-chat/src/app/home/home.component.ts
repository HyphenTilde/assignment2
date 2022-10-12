import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinksService } from '../links.service';
import { sender } from '../user_model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

}
