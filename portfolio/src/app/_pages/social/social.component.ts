import { Component, OnInit } from '@angular/core';
import { Network } from 'src/app/_models/network';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  networks = [
    new Network (1, 'Facebook', '../../../assets/icons/facebook.svg', 'https://www.facebook.com/'),
    new Network (2, 'Linkedin', '../../../assets/icons/linkedin.svg', 'https://www.linkedin.com/'),
    new Network (3, 'GitHub', '../../../assets/icons/github.svg', 'https://github.com/'),
    new Network (4, 'Instagram', '../../../assets/icons/instagram.svg', 'https://www.instagram.com/'),
    new Network (5, 'Twitter', '../../../assets/icons/twitter.svg', 'https://twitter.com/'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
