import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from '../teams.service';
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  teamslist !:any;
  constructor(private router : Router, private list : TeamsService) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.TeamsList();
  }
  TeamsList()
  {
    this.list.TeamsList()
    .subscribe(res=>{
      this.teamslist = res;
    })
  }

}
