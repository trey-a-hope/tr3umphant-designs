import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  public blogOneUrl = 'https://daytontechguide.com/test-this-new-app-for-daytons-artist-entrepreneur-community/?mc_cid=9351e5397c&mc_eid=cc9664f424&fbclid=IwAR019waR-XcIHFCtTWS3k5UBbgJOj3-tS1WjGWXw1_Gfh3pUn9gGnWdtSc8';

  constructor(public urlService: UrlService) { }

  ngOnInit() {
  }
}
