import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiter-search-bar',
  templateUrl: './fiter-search-bar.component.html',
  styleUrls: ['./fiter-search-bar.component.css']
})
export class FiterSearchBarComponent implements OnInit {
  collapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
