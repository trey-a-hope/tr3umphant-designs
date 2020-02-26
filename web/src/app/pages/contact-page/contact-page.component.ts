import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  contactForm;

  constructor(private formBuilder: FormBuilder, public emailService: EmailService) {

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

    this.emailService.sendEmail(`New Message From ${name}`, `Message: ${message}<br/>Email: ${email}`).subscribe(
        (res) => {
          if(res.status == 200){
            alert('Email sent!');
          }else{
            alert('Could not send email at this time.');
          }
        }
    );
  }

}
