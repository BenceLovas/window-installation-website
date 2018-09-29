import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-door',
  templateUrl: './page-door.component.html',
  styleUrls: ['./page-door.component.scss']
})
export class PageDoorComponent implements OnInit {

  events: string[] = [];
  opened = true;

  constructor() { }

  ngOnInit() {
  }

}
