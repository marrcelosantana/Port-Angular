import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nome = 'Mark Simons';
  title = 'Hey, Welcome 👋';
  intro = 'Learn more about ';
  description = 'Access the options above for more information. 😀';

  constructor() { }

  ngOnInit(): void {
  }

}
