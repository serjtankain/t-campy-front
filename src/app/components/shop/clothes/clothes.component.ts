import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import {ServiceproductService} from "../product/serviceproduct.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class CLOTHESComponent implements OnInit {


  listProduits!: product[];
  constructor(private productService:ServiceproductService,private router:Router) { }

  ngOnInit(): void {
    this.productService.getProduitByCathegory(  'CLOTHES').subscribe({
      next: (data) =>

        this.listProduits = data
    })

  }
  test(e:any){
    console.log(e,'eeeeee')
    this.router.navigate(['Details/'+e.id]);
  }




}
