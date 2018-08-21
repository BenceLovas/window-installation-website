import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  menus = [
    { label: 'Ablakok', link: '/window' },
    { label: 'Ajtók', link: '/door' },
    { label: 'Árnyékolástechnika', link: '/shutter' },
    { label: 'Kapcsolat', link: '/contact' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
