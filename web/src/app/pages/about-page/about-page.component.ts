import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(public urlService: UrlService) { }

  ngOnInit() {
  }
  
}
