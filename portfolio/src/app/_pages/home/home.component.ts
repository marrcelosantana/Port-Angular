import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nome = 'Mark Simons';
  frase1 = 'Hey, Welcome 👋';
  frase2 = 'Access the options above for more information. 😀';

  constructor() { }

  ngOnInit(): void {
  }

}
