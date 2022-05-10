import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { SideBarContentComponent } from './side-bar-content/side-bar-content.component';
import { ChannelsComponent } from './channels/channels.component';
const routes: Routes = [
  { path:'teams', component: ChannelsComponent, children: [{ path:':main', component: MainContentComponent}]},
  { path: ':function', component: SideBarContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
