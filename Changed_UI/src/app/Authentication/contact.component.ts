import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
save($event){
  alert("We will contact you shortly!")
}
  constructor() { }

  ngOnInit(): void {

  }

 
    name:string;
​
    subject:string;
​
    message:string;

    email:string;

    mobile:string;

}
