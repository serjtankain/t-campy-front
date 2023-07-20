import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceproductService} from "./serviceproduct.service";
import { HttpResponse } from '@angular/common/http';
import {product} from "src/app/models/product";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit{
  private product:any;
  private id:any
   visible:boolean= false;
  constructor(private productservice: ServiceproductService,private router:Router){}

  ngOnInit(): void {

  }
  getproduct (){
    this.productservice.getProductById(this.id).subscribe({
      next:(data)=>this.product=data
    })
  }

  setProduct(product : product) {
    this.productservice.addProduct(product).subscribe(
      (data: any) => {
      console.log(data);
      if (data.status === 200) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    }, (error) => {
      // Handle error here
      console.error(error);
      this.visible = false;
    });
  }

  getproducts(){
    this.productservice.getProducts().subscribe({
      next:(data)=>this.product=data

    })
  }
  updateProduct(){
    this.productservice.updateProduct(this.product).subscribe({
      next:()=>this.router.navigateByUrl('')
    })
  }
  deleteproduct(){
    this.productservice.deleteProduct(this.product.id)
  }
}
