import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';

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

  public unreadReader = {
    'android': ''
  }

  public litpic = {
    'ios': 'https://apps.apple.com/us/app/lit-pic-lithophane-creator/id1489604752',
    'android': 'https://play.google.com/store/apps/details?id=com.io.litpic'
  }

  constructor(public urlService: UrlService) { }

  ngOnInit() {
  }

  showMessage(message: String) {
    alert(message);
  }

}
