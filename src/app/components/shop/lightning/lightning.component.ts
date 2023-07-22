import { Component, OnInit } from '@angular/core';
import {ServiceproductService} from "../product/serviceproduct.service";
import {Router} from "@angular/router";
import {product} from "../../../models/product";

@Component({
  selector: 'app-lightning',
  templateUrl: './lightning.component.html',
  styleUrls: ['./lightning.component.css']
})
export class LIGHTNINGComponent implements OnInit {
  listProduits!: product[];

  constructor(private productService:ServiceproductService,private router:Router) { }

  ngOnInit(): void {
    this.productService.getProduitByCathegory(  'LIGHTNING').subscribe({
      next: (data) =>

        this.listProduits = data
    })

  }
  test(e:any){
    console.log(e,'eeeeee')
    this.router.navigate(['Details/'+e.id]);
  }
}
