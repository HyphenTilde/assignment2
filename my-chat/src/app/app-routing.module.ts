import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { GahomeComponent } from './gahome/gahome.component';
import { GhomeComponent } from './ghome/ghome.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShomeComponent } from './shome/shome.component';

const routes: Routes = [{path:'', component:LoginComponent}, {path:'home', component:HomeComponent}, {path:'shome', component:ShomeComponent}, {path:'ghome', component: GhomeComponent}, {path:'gahome', component:GahomeComponent}, {path:'chat', component:ChatComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
