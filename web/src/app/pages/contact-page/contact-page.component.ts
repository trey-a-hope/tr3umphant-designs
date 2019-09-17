import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  contactForm;

  constructor(private formBuilder: FormBuilder, ) {

    this.contactForm = this.formBuilder.group({
      name: '',
      email: '',
      message: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(data) {
    var name = data['name'];
    var email = data['email'];
    var message = data['message'];
    alert('Coming soon...');
  }

}
