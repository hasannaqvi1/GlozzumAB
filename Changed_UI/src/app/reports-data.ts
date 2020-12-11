import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ReportInterface } from './reports';

export class ReportData implements InMemoryDbService {

  createDb(): { reports: ReportInterface[] } {
    const reports: ReportInterface[] = [
      {
        sno: 1,
        cName: 'Rohan',
        productName: 'Tadasip 20',
        purchaseDate: 'March 19, 2020',
        unit: '400 ',
        email: 'mail@gmail.com'
      },
      {
        sno: 2,
        cName: 'Ram',
        productName: 'Paracetamol',
        purchaseDate: 'March 19, 2020',
        unit: '400 ',
        email: 'mail@gmail.com'
      },
      {
        sno: 5,
        cName: 'Shikha',
        productName: 'HCQS',
        purchaseDate: 'March 19, 2020',
        unit: '400',
        email: 'mail@gmail.com'
      },
      {
        sno: 8,
        cName: 'Rani',
        productName: 'Combiflam',
        purchaseDate: 'March 19, 2020',
        unit: '400',
        email: 'mail@gmail.com'
      },
      {
        sno: 10,
        cName: 'Priya',
        productName: 'Evion 400',
        purchaseDate: 'March 19, 2020',
        unit: '400',
        email: 'mail@gmail.com'
      }
    ];
    return { reports };
  }

}
