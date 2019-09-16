import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  openBlank(url) {
    window.open(url, "_blank");
  }

  openSame(url) {
    window.open(url);
  }
}
