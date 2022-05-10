import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  mainName: string | null = null;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.mainName = this.route.snapshot.paramMap.get('main');
  }

}
