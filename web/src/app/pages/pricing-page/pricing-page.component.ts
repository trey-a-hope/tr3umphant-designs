import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css']
})
export class PricingPageComponent implements OnInit {

  public contractUrl = 'https://drive.google.com/open?id=1zJi05BfphQ08qi-u4AJBINNC6T-T7AKk';
  public basicImageUrl = 'https://firebasestorage.googleapis.com/v0/b/tr3umphant-designs-bd77b.appspot.com/o/Images%2Fbasic_pricing.jpg?alt=media&token=f7508a59-4eaf-4353-b706-1e4beb11b3ae';
  public standardImageUrl = 'https://firebasestorage.googleapis.com/v0/b/tr3umphant-designs-bd77b.appspot.com/o/Images%2Fstandard_pricing.jpg?alt=media&token=8c2bd444-7b99-4d52-bb72-325912116d03';
  public premiumImageUrl = 'https://firebasestorage.googleapis.com/v0/b/tr3umphant-designs-bd77b.appspot.com/o/Images%2Fpremium_pricing.jpg?alt=media&token=84413dd2-dbf2-4e2f-8ae0-9b3eb9511dcf';

  constructor(public urlService: UrlService) { }

  ngOnInit() {
  }

}
