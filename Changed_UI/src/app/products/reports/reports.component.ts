import { Component, OnInit } from '@angular/core';
//import { ProductService } from '../product.service';
import { ReportInterface } from '../../reports';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  tableData
  filteredProducts: ReportInterface[] = [];
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.tableData;
  }

  //constructor( private ProductService: ProductService ) { }

  performFilter(filterBy: string): ReportInterface[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.tableData.filter((report: ReportInterface) =>
      report.cName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

   ngOnInit() {}
  //   console.log(this.tableData);
  // //  this.ProductService.getReports().subscribe({
  //     next: reports => {
  //       this.tableData = reports;
  //       this.filteredProducts = this.tableData;
  //     },
  //     error: err => this.errorMessage = err
  //   });
  //   console.log(this.filteredProducts);
  // }

  

}
