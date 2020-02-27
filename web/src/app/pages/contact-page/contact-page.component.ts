import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  subjectFormControl = new FormControl('', [
    Validators.required,
  ]);

  messageFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(public emailService: EmailService) {
  }

  ngOnInit() {
  }

  formIsValid = (): boolean => {
    if(this.nameFormControl.valid && this.emailFormControl.valid && this.subjectFormControl.valid && this.messageFormControl.valid){
      return true;
    }
    return false;
  }

  onSubmit() {
    if(this.formIsValid()){
      var name = this.nameFormControl.value;
      var email = this.emailFormControl.value;
      var subject = this.subjectFormControl.value;
      var message = this.messageFormControl.value;
      this.emailService.sendEmail(subject, `Name: ${name}<br/>Message: ${message}<br/>Email: ${email}`).subscribe(
          (res) => {
            if(res.status == 200){
              alert('Email sent!');
            }else{
              alert('Could not send email at this time.');
            }
          }
      );
    }else{
      alert('Please fix errors first.');
    }
  }

}
