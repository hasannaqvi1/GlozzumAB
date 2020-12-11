/* Defines the product entity */
export interface Product {
  id: number;
  productName: string;
  productCode: string;
  usage: string[];
  manufactureDate: Date;
  expiryDate: Date;
  price: number;
  quantity: string;
  imageUrl: string;
}

