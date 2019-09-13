import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {
  public hiddenGems = {
    'ios': 'https://apps.apple.com/us/app/hxddxn-gxms/id1477749493',
    'android': 'https://play.google.com/store/apps/details?id=com.io.hiddengems_flutter&hl=en_US'
  };

  public tr3Designs = {
    'ios': 'https://apps.apple.com/us/app/tr3designs/id1390134234',
    'android': 'https://play.google.com/store/apps/details?id=com.io.tr3designs_flutter&hl=en_US'
  }

  constructor() { }

  ngOnInit() {
  }


  openUrl(url) {
    window.open(url, "_blank");
  }

}