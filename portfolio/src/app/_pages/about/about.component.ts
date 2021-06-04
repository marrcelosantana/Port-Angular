import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  text = 'Duis aliqua tempor excepteur aliquip. Consequat irure cupidatat do sint non ut. Tempor duis in ea minim eiusmod. Fugiat ad ad irure dolore fugiat eiusmod exercitation. Consequat amet nulla officia sit eiusmod magna laboris exercitation occaecat cupidatat ad. Culpa culpa aliqua et mollit aliquip mollit adipisicing quis anim fugiat sunt in mollit. Eu in nisi enim quis sit eu fugiat sunt.'

  constructor() { }

  ngOnInit(): void {
  }

}
