import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  firstName: string;
  lastName: string;
  birthday: string;
  helloMsg: string;
  age: number;
  gender: string;

  constructor() { }

  ngOnInit() {
    this.helloMsg = 'Hello good world!';
  }

  calculateAge() {
    this.age =
     new Date().getFullYear() - (+this.birthday.substr(this.birthday.lastIndexOf('/')+1));
  }

}
