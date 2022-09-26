import { Injectable } from '@angular/core';
import { IProduct } from 'src/shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getProducts(){
    return products;
  }

  addProduct(product: IProduct){
    products.push(product)
  }
}


const products: IProduct[] = [{
  title: 'Hello',
  modelName: 'Angel',
  color: 'Black',
  productType: 'Mobile',
  brand: 'Ortiz',
  price: 100
}]