import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nome = 'Mark Simons';
  frase1 = 'Seja bem-vindo! 👋';
  frase2 = 'Acesse os menus acima para mais informações 😀';

  constructor() { }

  ngOnInit(): void {
  }

}
