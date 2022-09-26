import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/shared/product.model';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  productTypes = ['Laptop', 'Mobile'];
  myForm!: FormGroup;
  productForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.pattern('^[a-zA-Z_][a-zA-Z0-9_]*$')]],
    modelName: ['', Validators.required],
    color: ['', Validators.required],
    productType: [''],
    brand: ['', Validators.required],
    price: [, [Validators.required, Validators.pattern('[0-9]+(.[0-9][0-9]?)?$')]]
  })
  private _submit: boolean = true
  

constructor(private formBuilder: FormBuilder, 
            private router: Router, 
            private productService: ProductsService) { }

  ngOnInit() {
    
  }
  //========Getters========
  // For each formControl in FomrGroup
  get Title(){
    return this.productForm.get('title')
  }

  get ModelName(){
    return this.productForm.get('modelName')
  }

  get Color(){
    return this.productForm.get('color')
  }

  get ProductType(){
    return this.productForm.get('productType')
  }

  get Brand(){
    return this.productForm.get('brand')
  }

  get Price(){
    return this.productForm.get('price')
  }
  //=================================
  //=================================
  get Submit(){
    return this._submit;
  }

  saveForm(productValue:IProduct){
    if (this.productForm.valid){
      this.productService.addProduct(productValue)
      
    }else{
      console.log('Fomr invalid')
      this._submit = false
    }
    
  }
    onCancel(){
      this.router.navigate([''])
    }

    validateTitle(){
      return this.productForm.get('title')?.valid || this.productForm.get('title')?.untouched
    }
    validateModelName(){
      return this.productForm.get('modelName')?.valid || this.productForm.get('modelName')?.untouched
    }
    validateColor(){
      return this.productForm.get('color')?.valid || this.productForm.get('color')?.untouched
    }
    validateBrand(){
      return this.productForm.get('brand')?.valid || this.productForm.get('brand')?.untouched
    }
    validatePrice(){
    
      return this.productForm.get('price')?.valid || this.productForm.get('price')?.untouched
    }
    
}
