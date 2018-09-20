import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-window',
  templateUrl: './page-window.component.html',
  styleUrls: ['./page-window.component.scss']
})
export class PageWindowComponent implements OnInit {

  sideNav = [
    {
      title: '2 Rétegű',
      brands: [
        { name: 'Decco 71', link: 'decco71-2' },
        { name: 'Gealan', link: 'gealan-2' },
        { name: 'Ovlo', link: 'ovlo-2' },
      ]
    },
    {
      title: '3 Rétegű',
      brands: [
        { name: 'Encore', link: 'encore-3' },
        { name: 'Prime', link: 'prime-3' },
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
