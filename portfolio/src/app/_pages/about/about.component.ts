import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Nulla aliquet enim tortor at. Urna et pharetra pharetra massa massa ultricies mi. Blandit massa enim nec dui nunc mattis enim ut. Aliquet porttitor lacus luctus accumsan tortor posuere. Vivamus arcu felis bibendum ut. Arcu bibendum at varius vel pharetra vel turpis nunc. Id diam maecenas ultricies mi eget. Arcu non odio euismod lacinia at quis risus. Aliquet porttitor lacus luctus accumsan tortor posuere.'

  constructor() { }

  ngOnInit(): void {
  }

}
