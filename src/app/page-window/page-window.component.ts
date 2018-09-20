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
        'Ovlo',
        'Decco 71',
        'Gealan',

      ]
    },
    {
      title: '3 Rétegű',
      brands: [
        'Encore',
        'Prime',
      ]
    },
    {
      title: '2 Rétegű',
      brands: [
        'Ovlo',
        'Decco 71',
        'Gealan',

      ]
    },
    {
      title: '3 Rétegű',
      brands: [
        'Encore',
        'Prime',
      ]
    },
    {
      title: '2 Rétegű',
      brands: [
        'Ovlo',
        'Decco 71',
        'Gealan',

      ]
    },
    {
      title: '3 Rétegű',
      brands: [
        'Encore',
        'Prime',
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
