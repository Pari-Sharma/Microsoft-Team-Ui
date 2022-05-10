import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import { MainContentComponent } from './main-content/main-content.component';
import { ChannelsComponent } from './channels/channels.component';
import { SideBarContentComponent } from './side-bar-content/side-bar-content.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    MainContentComponent,
    ChannelsComponent,
    SideBarContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
