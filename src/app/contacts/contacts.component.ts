import { Component } from '@angular/core';
import {FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  Registration = new FormGroup(
    {
      username:new FormControl(""),
    password:new FormControl(""),
    confirmpsw:new FormControl(""),
    adress:new FormGroup({
    house:new FormControl(""),
    place:new FormControl(""),
    city:new FormControl("")
  })
  }
  )
  }


