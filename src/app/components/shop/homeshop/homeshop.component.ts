import {Component, OnInit} from '@angular/core';
import {product} from "../../../models/product";
import {ServiceproductService} from "../product/serviceproduct.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homeshop',
  templateUrl: './homeshop.component.html',
  styleUrls: ['./homeshop.component.css']
})
export class HomeshopComponent implements OnInit {

  constructor(private productService: ServiceproductService,private router:Router) {
  }

  listProduits!: product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) =>

        this.listProduits = data
    })
    console.log("eee", this.listProduits)
  }
  test(e:any){
    console.log(e,'eeeeee')
    this.router.navigate(['Details/'+e.id]);
  }

  clickroute() {
    this.router.navigate(['Details-Product']);
  }
}
