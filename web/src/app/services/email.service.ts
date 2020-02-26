import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  headers: Headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  options: RequestOptions = new RequestOptions({ headers: this.headers }); // Create a request option
  endpoint: string = 'https://us-central1-myapi-e0bfc.cloudfunctions.net/SendEmail';

  constructor(
    private http: Http
  ) { }

  public sendEmail(subject: string, message: string): Observable<any> {

    let data = JSON.stringify({
      to : 'tr3umphant.designs@gmail.com',
      subject : subject,
      message : message,
      gmailUser: 'tr3umphant.designs@gmail.com',
      gmailPassword: 'Peachy33'
    });

    return this.http.post(this.endpoint, data, this.options);
  }
}
