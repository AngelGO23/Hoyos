import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/shared/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  products!: IProduct[];
  constructor(private productService: ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  returnHome(){
    this.router.navigate([''])
  }

}
