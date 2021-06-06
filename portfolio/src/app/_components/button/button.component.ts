import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  message: string = 'Olá, seja muito bem-vindo!!';

  alertar(){
    window.alert(this.message);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
