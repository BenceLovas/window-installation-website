import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-top',
  templateUrl: './navigation-top.component.html',
  styleUrls: ['./navigation-top.component.scss']
})
export class NavigationTopComponent implements OnInit {

  menus = [
    { label: 'Kezdőlap', link: '/home' },
    { label: 'Ablakok', link: '/window' },
    { label: 'Ajtók', link: '/door' },
    { label: 'Árnyékolástechnika', link: '/shade' },
    { label: 'Kapcsolat', link: '/contact' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
