import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/app/_models/nav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navs = [
    new Nav ('Home', '/home'),
    new Nav ('About', '/about'),
    new Nav ('Work', '/work'),
    new Nav ('Social', '/social')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
