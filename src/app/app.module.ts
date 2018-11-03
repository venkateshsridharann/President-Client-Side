import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PresidentsComponent } from './presidents/presidents.component';
import { AscComponent } from './asc/asc.component';
import { DescComponent } from './desc/desc.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PresidentsComponent,
    AscComponent,
    DescComponent,

  ],
  imports:[
 CommonModule,
NgtUniversalModule,
 
    
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
})
export class AppModule { }
