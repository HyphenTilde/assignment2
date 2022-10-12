import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User, sender } from './user_model';

const backendurl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http:HttpClient) { }

  login(user: User){
    return this.http.post<any>(backendurl + '/api/login', user);
  }
  collect(id: sender){
    return this.http.post<any>(backendurl + '/api/collect', id);
  }
  screate(user: User){
    return this.http.post<any>(backendurl + '/api/screate', user);
  }
  sremove(user: User){
    return this.http.post<any>(backendurl + '/api/sremove', user);
  }
  supgrade(user: User){
    return this.http.post<any>(backendurl + '/api/supgrade', user);
  }
}
