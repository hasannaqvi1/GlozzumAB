import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb(): { products: Product[]} {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Tadasip 20',
        productCode: '1001',
        manufactureDate: new Date("Fri Dec 08 2019 07:44:57"),
        expiryDate:new Date("Fri Dec 08 2019 07:44:57"),
        quantity: '400 ',
        price: 19,
        imageUrl: 'assets/images/tadacip20.png',
        usage: ['Erectile Dysfuntion ', ' Benign prostatic hyperplasia']
      },
      {
        id: 2,
        productName: 'Paracetamol',
        productCode: '1002',
        manufactureDate: new Date("Fri Dec 08 2019 07:44:57"),
        expiryDate:new Date("Fri Dec 08 2019 07:44:57"),
        quantity: '400 ',
        price: 32,
        usage: [' headaches', 'menstrual periods ', ' toothaches ', ' backaches ', ' cold/flu aches ', ' pains ', ' reduce fever.'],
        imageUrl: 'assets/images/paracetamol.png'
      },
      {
        id: 5,
        productName: 'HCQS',
        productCode: '1003',
        manufactureDate: new Date("Fri Dec 08 2019"),
        expiryDate:new Date("Fri Dec 08 2019"),
        quantity: '400',
        price: 8,
        imageUrl: 'assets/images/hcqs200.png',
        usage: ['Systemic lupus erythematosus (SLE) ', ' Rheumatoid arthritis']
      },
      {
        id: 8,
        productName: 'Combiflam',
        productCode: '1004',
        manufactureDate: new Date("Fri Dec 08 2019"),
        expiryDate:new Date("Fri Dec 08 2019"),
        quantity: '400',
        price: 11,
        usage: ['Pain relief ',' Fever'],
        imageUrl: 'assets/images/combiflam.png'
      },
      {
        id: 10,
        productName: 'Evion 400',
        productCode: '1005',
        manufactureDate: new Date("Fri Dec 08 2019"),
        expiryDate:new Date("Fri Dec 08 2019"),
        quantity: '400',
        price: 35,
        usage:['Cystic fibrosis ', ' Tardive dyskinesia ', ' Vitamin E deficiency'],
        imageUrl: 'assets/images/evion400.png'
      }
    ];
    return { products };
  }
}
