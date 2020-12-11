import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-procurement',
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.css']
})
export class ProcurementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  procurement = [
    {name:"Sikandar", employeeCode:"1003",general: "fan",medicine:"paracetamol", doc:"25-01-2020",note:"additional note"},
    {name:"hirandar", employeeCode:"1002",general: "notebook",medicine:"paracetamol", doc:"25-01-2020",note:"additional note"},
    {name:"jalandar", employeeCode:"1004",general: "chair",medicine:"HCQS", doc:"25-01-2020",note:"additional note"}
  ]
  model:any={};
  model2:any={};
  msg:any="";
  addEmployee(){
    this.procurement.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... "; 

  }
  deleteEmployee(i){
    this.procurement.splice(i,1);
    this.msg = "Record is successfully deleted..... ";
    
  }
  myValue;
  editEmployee(k){
    this.model2.name = this.procurement[k].name;
    this.model2.employeeCode = this.procurement[k].employeeCode;
    this.model2.general = this.procurement[k].general;
    this.model2.medicine = this.procurement[k].medicine;
    this.model2.doc = this.procurement[k].doc;
    this.model2.note = this.procurement[k].note;
    this.myValue = k;

  }
  updateEmployee(){
    let k= this.myValue;
    for(let i=0; i<this.procurement.length;i++){
      if(i==k){
        this.procurement[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }

  }
  clickMe(){
    this.msg = "";
  }
}
