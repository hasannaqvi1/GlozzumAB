import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees = [
    {employeeid:"1001",name:"Sikandar", age:"18",gender:"Male",contactno:"1234567890",bloodgrp:"B+",locality:"Kandivali",dateofjoining:"2018-05-10",position:"Senior Pharmacist"},
    {employeeid:"1002",name:"Aman", age:"15",gender:"Male",contactno:"2345678910",bloodgrp:"A+",locality:"Andheri",dateofjoining:"2018-05-10",position:"Junior Pharmacist"},
    {employeeid:"1003",name:"Julie", age:"28",gender:"Female",contactno:"3456789012",bloodgrp:"AB+",locality:"Dadar",dateofjoining:"2018-05-10",position:"Senior Pharmacist"}
  ];
  model:any={};
  model2:any={};
  msg:any="";
  addEmployee(){
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... "; 

  }
  deleteEmployee(i){
    this.employees.splice(i,1);
    this.msg = "Record is successfully deleted..... ";
    
  }
  myValue;
  editEmployee(k){
    this.model2.employeeid = this.employees[k].employeeid;
    this.model2.name = this.employees[k].name;
    this.model2.age = this.employees[k].age;
    this.model2.gender = this.employees[k].gender;
    this.model2.contactno = this.employees[k].contactno;
    this.model2.bloodgrp = this.employees[k].bloodgrp;
    this.model2.locality = this.employees[k].locality;
    this.model2.dateofjoining = this.employees[k].dateofjoining;
    this.model2.position = this.employees[k].position;
    this.myValue = k;

  }
  updateEmployee(){
    let k= this.myValue;
    for(let i=0; i<this.employees.length;i++){
      if(i==k){
        this.employees[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }

  }
  clickMe(){
    this.msg = "";
  }
}
