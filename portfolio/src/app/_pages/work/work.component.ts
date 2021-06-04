import { Component, OnInit } from '@angular/core';
import { Technologies } from 'src/app/_models/technologies';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  tecs = [
    new Technologies (1, 'Html 5', '../../../assets/icons/html.svg'),
    new Technologies (2, 'CSS 3', '../../../assets/icons/css.svg'),
    new Technologies (3, 'JavaScript', '../../../assets/icons/javascript.svg'),
    new Technologies (4, 'React', '../../../assets/icons/react.svg'),
    new Technologies (5, 'Angular', '../../../assets/icons/angular.svg'),
    new Technologies (6, 'NextJS', '../../../assets/icons/next.svg'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
