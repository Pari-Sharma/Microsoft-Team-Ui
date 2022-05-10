import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-side-bar-content',
  templateUrl: './side-bar-content.component.html',
  styleUrls: ['./side-bar-content.component.css']
})
export class SideBarContentComponent implements OnInit {

  functionName: string | null = null;
  constructor(private route:ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.functionName = this.route.snapshot.paramMap.get('function');
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

}
