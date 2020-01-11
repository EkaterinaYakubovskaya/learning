import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  form: FormGroup;
  age: number;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.pattern('\d{2}\/\d{2}\/\d{4}')],
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  calculateAge() {
    const birthday = this.form.get('birthday').value;
    this.age = new Date().getFullYear() - (+birthday.substr(birthday.lastIndexOf('/') + 1));
  }

}
