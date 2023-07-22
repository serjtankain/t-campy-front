import { Component, OnInit } from '@angular/core';
import {product} from "../../../models/product";
import {ServiceproductService} from "../product/serviceproduct.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cookingmaterials',
  templateUrl: './cookingmaterials.component.html',
  styleUrls: ['./cookingmaterials.component.css']
})
export class COOKINGMATERIALSComponent implements OnInit {
  listProduits!: product[];
  constructor(private productService: ServiceproductService,private router:Router) { }

  ngOnInit(): void {
    this.productService.getProduitByCathegory(  'COOKINGMATERIALS').subscribe({
      next: (data) =>

        this.listProduits = data
    })

  }
  test(e:any){
    console.log(e,'eeeeee')
    this.router.navigate(['Details/'+e.id]);
  }
}
