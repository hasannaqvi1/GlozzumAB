import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-addprocurement',
  templateUrl: './addprocurement.component.html',
  styleUrls: ['./addprocurement.component.css']
})
export class AddprocurementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  procurement = [
    {name:"Sikandar", employeeCode:"1003",general: "fan",medicine:"paracetamol", doc:"25-01-2020",note:"additional note"},
    {name:"hirandar", employeeCode:"1002",general: "notebook",medicine:"paracetamol", doc:"25-01-2020",note:"additional note"},
    {name:"jalandar", employeeCode:"1004",general: "chair",medicine:"HCQS", doc:"25-01-2020",note:"additional note"}
  ]
  model:any={};

  addEmployee(){
    this.procurement.push(this.model);
    this.model = {};


  }
}
